import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpenseAsync } from '../actions/expenses'

const AddExpensePage = ({ history, addExpense }) => (
  <div className='container'>
    <h3>Add New Expense</h3>
    <ExpenseForm
      handleSubmit={expense => {
        addExpense(expense)
        history.push('/')
      }}
    />
  </div>
)

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpenseAsync(expense))
})
export default connect(undefined, mapDispatchToProps)(AddExpensePage) // give this component the ability to dispatch actions
