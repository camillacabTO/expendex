import React from 'react'
import ExpensesFilters from './ExpensesFilters'
import ExpenseList from './ExpensesList'
import ExpensesTotal from './ExpensesTotal'
import { connect } from 'react-redux'

const ExpenseDashboardPage = ({ userDisplayName }) => (
  <div className='container'>
    <h3>
      Welcome <span id='username'>{userDisplayName}</span>
    </h3>
    <ExpensesFilters />
    <h1>
      Your <span className='green-text darken-1'>Expense List</span>
    </h1>
    <ExpensesTotal />
    <ExpenseList />
  </div>
)

const mapStateToProps = state => ({
  userDisplayName: state.auth.displayName
})

export default connect(mapStateToProps)(ExpenseDashboardPage)
