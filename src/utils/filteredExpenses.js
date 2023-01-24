import moment from 'moment'

const getFilteredExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  return expenses
    .filter(expense => {
      const expenseCreatedAt = moment(expense.createdAt) // created a moment obj from the unix time stamp stored
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(expenseCreatedAt)
        : true // if startDate exists check if expense createdAt is within the range. If startDate is not set (null), do not filter based on date and always let it pass (return true)
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(expenseCreatedAt)
        : true
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase())

      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
    })
}

export default getFilteredExpenses
