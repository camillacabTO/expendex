import React from 'react'
import { connect } from 'react-redux'
import ExpenseItem from './ExpenseItem'
import getFilteredExpenses from '../utils/filteredExpenses'

const ExpensesList = ({ expenses }) => {
  return (
    <div>
      <div className='collection'>
        <p className='collection-item list-title'>
          <span className='right'>Expense</span>
          <span className='left'>Amount</span>
        </p>
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} {...expense} /> // spreading the key-value pair of expense to be props in the ExpenseItem func comp
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  expenses: getFilteredExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpensesList)
