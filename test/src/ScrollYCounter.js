import React from 'react';

const ScrollYCounter = ({ scrollY, leftOrRight }) => (
  <span
    style={{
      position: `fixed`,
      top: 0,
      [leftOrRight]: 0,
      fontSize: 20,
      fontFamily: 'sans-serif',
    }}
    children={scrollY}
  />
);

export default ScrollYCounter;
