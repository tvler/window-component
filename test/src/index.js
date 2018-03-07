import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Stateful from './Stateful';
import Functional from './Functional';

ReactDOM.render(
  <Fragment>
    <Stateful />
    <Functional />

    <div style={{ height: `300vh` }} />
  </Fragment>,
  document.getElementById('root'),
);
