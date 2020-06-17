import React from 'react';
import { Switch } from 'react-router-dom';

import LayoutAuth from './Layouts/Auth';
import LayoutApp from './Layouts/App';

import Route from './Route';

import Login from '../pages/Login';
import MyFolders from '../pages/MyFolders';
import Recent from '../pages/Recent';
import Stars from '../pages/Stars';
import Folder from '../pages/Folder';
import Search from '../pages/Search';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} layout={LayoutAuth} />
    <Route path="/recent" component={Recent} layout={LayoutApp} isPrivate />
    <Route path="/stars" component={Stars} layout={LayoutApp} isPrivate />
    <Route
      path="/dashboard"
      component={MyFolders}
      isPrivate
      layout={LayoutApp}
    />
    <Route
      path="/folders/:id"
      component={Folder}
      layout={LayoutApp}
      isPrivate
    />
    <Route path="/search" component={Search} layout={LayoutApp} isPrivate />
  </Switch>
);

export default Routes;
