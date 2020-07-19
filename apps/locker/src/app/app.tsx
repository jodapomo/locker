import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LockerPage from './pages/locker.page';

export const App = () => (
  <Switch>
    <Route exact path="/" component={LockerPage} />
  </Switch>
);

export default App;
