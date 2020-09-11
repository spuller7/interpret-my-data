import React, { lazy, Suspense } from 'react';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Loader from '@imd/components/utility/loader';

const routes = [
  {
    path: '',
    component: lazy(() => import('@imd/containers/Widgets/Widgets')),
    exact: true,
  },
  {
    path: 'affix',
    component: lazy(() => import('@imd/containers/Navigation/Affix')),
  },
  {
    path: 'menu',
    component: lazy(() => import('@imd/containers/Navigation/NavigationMenu')),
  },
  {
    path: 'spotify',
    component: lazy(() => 
      import('@imd/containers/Spotify/Overview')
    ),
  },
  {
    path: 'tinder',
    component: lazy(() => 
      import('@imd/containers/Tinder/Overview')
    ),
  }
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
