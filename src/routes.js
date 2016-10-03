import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './containers/App';
import Home from './containers/Home';
import BlackBoxList from './containers/BlackBoxList';
import ChildrenList from './containers/ChildrenList';
import FunctionAsChildrenList from './containers/FunctionAsChildrenList';
import BestList from './containers/BestList';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="blackbox-list(/:page)" component={BlackBoxList} />
    <Route path="children-list(/:page)" component={ChildrenList} />
    <Route path="function-as-children-list(/:page)" component={FunctionAsChildrenList} />
    <Route path="best-list(/:page)" component={BestList} />
  </Route>
);
