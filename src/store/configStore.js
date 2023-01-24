import { createStore, combineReducers, applyMiddleware } from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'

// Store creation

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
