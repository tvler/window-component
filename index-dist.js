'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDomEvent = function getDomEvent(propName) {
  return propName.substring(2).toLowerCase();
};

var Window = function (_PureComponent) {
  _inherits(Window, _PureComponent);

  function Window() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Window);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Window.__proto__ || Object.getPrototypeOf(Window)).call.apply(_ref, [this].concat(args))), _this), _this.updateChildren = function () {
      _this.forceUpdate();
    }, _this.updateEvents = function (prevProps, currentProps) {
      Object.keys(_extends({}, prevProps, currentProps)).filter(function (key) {
        return key !== 'children';
      }).filter(function (key) {
        return currentProps[key] !== prevProps[key];
      }).forEach(function (key) {
        [['removeEventListener', prevProps], ['addEventListener', currentProps]].forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              addOrRemoveEvent = _ref3[0],
              props = _ref3[1];

          if (props[key] instanceof Function) {
            window[addOrRemoveEvent](getDomEvent(key), props[key]);
          }
          if (props.children) {
            window[addOrRemoveEvent](getDomEvent(key), _this.updateChildren);
          }
        });
      });
    }, _this.render = function () {
      return window && _this.props.children ? _this.props.children(window) : null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Window, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateEvents({}, this.props);
      this.forceUpdate();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.updateEvents(this.props, {});
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.updateEvents(prevProps, this.props);
    }
  }]);

  return Window;
}(_react.PureComponent);

Window.propTypes = {
  children: _propTypes2.default.func,
  eventName: function eventName(_ref4, propName, componentName) {
    var children = _ref4.children,
        props = _objectWithoutProperties(_ref4, ['children']);

    var eventNames = Object.keys(props).filter(function (prop) {
      return !/^on+[A-Z]/.test(prop);
    }).join(', ');
    return eventNames ? new Error('Invalid prop(s) \'' + eventNames + '\' supplied to \'' + componentName + '\'. All props except \'children\' must begin with \'on\' and must be camelCased. Validation failed.') : null;
  }
};
exports.default = Window;
