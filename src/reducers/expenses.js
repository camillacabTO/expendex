const expensesDefaultState = []

const expensesReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense] // add new expense to the end of the array
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    case 'SET_EXPENSES':
      return action.expenses // it doest not matter what was saved in the previous state
    default:
      return state
  }
}

export default expensesReducer
