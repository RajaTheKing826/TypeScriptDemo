import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { I18nextProvider } from 'react-i18next'

import HomeRoute from './routes/HomeRoute'
import SampleRoute from './routes/SampleRoute'
import ImagesRoute from './routes/ImagesRoute'

import stores from './stores'

import {
  HOME_ROUTE_PATH,
  SAMPLE_ROUTE_PATH,
  TODOS_ROUTE_PATH,
  POSTS_ROUTE_PATH,
  HOC_ROUTE_PATH,
  IMAGES_ROUTE_PATH
} from './constants/NavigationConstants'

const TodosRoute = lazy(() => import('./routes/TodosRoute'))
const PostsRoute = lazy(() => import('./PostsModule/routes/PostsRoute'))
const HocRoute = lazy(() => import('./routes/HocRoute'))
import i18n from './i18n'

const App = () => {
  return (
    <Provider {...stores}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<div />}>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path={SAMPLE_ROUTE_PATH}>
                <SampleRoute />
              </Route>
              <Route exact path={TODOS_ROUTE_PATH}>
                <TodosRoute />
              </Route>

              <Route exact path={HOC_ROUTE_PATH}>
                <HocRoute />
              </Route>
              <Route exact path={IMAGES_ROUTE_PATH}>
                <ImagesRoute />
              </Route>
              <Route exact path={POSTS_ROUTE_PATH}>
                <PostsRoute />
              </Route>
              <Route path={HOME_ROUTE_PATH}>
                <HomeRoute />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </I18nextProvider>
    </Provider>
  )
}

export default App
