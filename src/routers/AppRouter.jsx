import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import history from '../utils/customHistory'

const AppRouter = () => (
  <Router history={history}>
    <React.Fragment>
      <Switch>
        {/* makes sure that only one component is shown for each route */}
        <PublicRoute exact path='/' component={LoginPage} />
        <PrivateRoute
          exact
          path='/dashboard'
          component={ExpenseDashboardPage}
        />
        <PrivateRoute exact path='/create' component={AddExpensePage} />
        <PrivateRoute exact path='/edit/:id' component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  </Router>
)

export default AppRouter
