import React from 'react';
import Window from 'window-component';
import ScrollYCounter from './ScrollYCounter';

export default () => (
  <Window onScroll>
    {({ scrollY }) => <ScrollYCounter scrollY={scrollY} leftOrRight="right" />}
  </Window>
);
