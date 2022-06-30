import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from 'components/Auth/ProtectedRoute'
import loadable from '@loadable/component'
import Loading from 'components/Common/Loading'
import Authentication from 'containers/page/Autentication'
import { ElementeRouterProtect, optionsRoutesNavBar } from './configRoutes'

const Main = loadable(() => import('../containers/Main'), {
  fallback: <Loading />,
})
const ProfilePage = React.lazy(() => import('containers/page/Profile'))

const routes = (history) => (
  <Fragment>
    <Routes history={history}>
      <Route
        exact
        path='/'
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      >
        {optionsRoutesNavBar.map(({ elementComponent, path, label }, key) => (
          <Route
            index={`${key}-label`}
            element={elementComponent}
            path={path}
          />
        ))}
        <Route
          path='/myprofile'
          element={ElementeRouterProtect(<ProfilePage />)}
        />
      </Route>

      <Route
        path='/login'
        element={<Authentication stateCurrent={'login'} />}
      />
      <Route
        path='/register'
        element={<Authentication stateCurrent={'register'} />}
      />
    </Routes>

    {/* <Route component={Callback} exact path='/callback' /> */}
  </Fragment>
)

export default routes
 