import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import LockerPage from './pages/locker/locker.page';

library.add(fas, far);

export const App = () => (
  <Switch>
    <Route exact path="/" component={LockerPage} />
  </Switch>
);

export default App;
