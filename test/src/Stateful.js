import React, { Component, Fragment } from 'react';
import Window from 'window-component';
import ScrollYCounter from './ScrollYCounter';

export default class Stateful extends Component {
  state = { scrollY: 0 };

  onScroll = () => {
    const { scrollY } = window;
    this.setState(() => ({ scrollY }));
  };

  render = () => (
    <Fragment>
      <Window onScroll={this.onScroll} />
      <ScrollYCounter scrollY={this.state.scrollY} leftOrRight="left" />
    </Fragment>
  );
}
