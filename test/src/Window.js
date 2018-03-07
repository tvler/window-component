import { PureComponent } from 'react';
import PropTypes from 'prop-types';

const getDomEvent = propName => propName.substring(2).toLowerCase();

export default class Window extends PureComponent {
  static propTypes = {
    children: PropTypes.func,
    eventName: ({ children, ...props }, propName, componentName) => {
      const eventNames = Object.keys(props)
        .filter(prop => !/^on+[A-Z]/.test(prop))
        .join(', ');
      return eventNames
        ? new Error(
            `Invalid prop(s) '${eventNames}' supplied to '${componentName}'. All props except 'children' must begin with 'on' and must be camelCased. Validation failed.`,
          )
        : null;
    },
  };

  updateChildren = () => {
    this.forceUpdate();
  };

  updateEvents = (prevProps, currentProps) => {
    Object.keys({ ...prevProps, ...currentProps })
      .filter(key => key !== 'children')
      .filter(key => currentProps[key] !== prevProps[key])
      .forEach(key => {
        [
          ['removeEventListener', prevProps],
          ['addEventListener', currentProps],
        ].forEach(([addOrRemoveEvent, props]) => {
          if (props[key] instanceof Function) {
            window[addOrRemoveEvent](getDomEvent(key), props[key]);
          }
          if (props.children) {
            window[addOrRemoveEvent](getDomEvent(key), this.updateChildren);
          }
        });
      });
  };

  componentDidMount() {
    this.updateEvents({}, this.props);
    this.forceUpdate();
  }
  componentWillUnmount() {
    this.updateEvents(this.props, {});
  }
  componentDidUpdate(prevProps) {
    this.updateEvents(prevProps, this.props);
  }
  render = () =>
    window && this.props.children ? this.props.children(window) : null;
}
