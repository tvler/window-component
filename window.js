import React, { PureComponent } from "react";

class Window extends PureComponent {
  addRemoveEventsFactory = (addOrRemove) => () => {
    const addRemoveEventListenerMap = {
      add: "addEventListener",
      remove: "removeEventListener",
    };

    const eventsMap = {
      onScroll: "scroll",
      onResize: "resize",
    };

    Object.entries(this.props)
      .filter(([key]) => key in eventsMap)
      .forEach(([key, value]) => {
        window[addRemoveEventListenerMap[addOrRemove]](eventsMap[key], value);
      });
  };

  componentDidMount = this.addRemoveEventsFactory("add");
  componentDidUpdate = this.addRemoveEventsFactory("add");
  componentWillUnmount = this.addRemoveEventsFactory("remove");
  componentWillUpdate = this.addRemoveEventsFactory("remove");
  render = () => false;
}

export default Window;
