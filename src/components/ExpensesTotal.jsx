import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getFilteredExpenses from '../utils/filteredExpenses'

const ExpensesTotal = ({ expenses }) => {
  const total = expenses.reduce((total, expense) => total + expense.amount, 0)
  return (
    <div>
      {!!expenses.length && ( // only shows if there at least one expense displayed in the list
        <p className='row' id='summary'>
          <span className='col s12 m6 left-align'>
            Showing: {expenses.length}{' '}
            {expenses.length === 1 ? 'expense' : 'expenses'}
          </span>
          <span className='col s12 m6 right-align'>
            Total: {numeral(total / 100).format('$0,0.00')}
          </span>
        </p>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  expenses: getFilteredExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpensesTotal)
