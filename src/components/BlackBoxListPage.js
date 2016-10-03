import React from 'react';

import BlackBoxList from './BlackBoxList';

const BlackBoxListPage = (props) =>
  <div>
    <h1 className="ui header">A Blackbox component</h1>
    <BlackBoxList {...props} />
  </div>;

export default BlackBoxListPage;
