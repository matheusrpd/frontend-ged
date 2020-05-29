import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRuteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRuteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  layout: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  layout: Layout,
  isPrivate = false,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
