import database from '../firebase/firebase'

export const setExpenses = expenses => {
  return {
    type: 'SET_EXPENSES',
    expenses
  }
}

export const fetchExpensesAsync = () => {
  // returns a promise
  return (dispatch, getState) => {
    const userID = getState().auth.userID
    return database
      .ref(`users/${userID}/expenses`)
      .once('value')
      .then(snapshot => {
        // makes this action generator returns a function
        // fetching from Firebase
        const expenses = []
        snapshot.forEach(childSnapshot => {
          // snapshot === object with data in the DB
          expenses.push({
            // set up an item in the array
            id: childSnapshot.key, // use key generated from Firebase
            ...childSnapshot.val() // spread data in the object
          })
        })
        dispatch(setExpenses(expenses)) // after finishing parsing data, dispatch to reducer
      })
  }
}

export const addExpense = expense => ({
  // will be used inside addExpenseAsync
  type: 'ADD_EXPENSE',
  expense
})

export const addExpenseAsync = ({
  // provide default to all properties
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => {
  return (dispatch, getState) => {
    const newExpense = { description, note, amount, createdAt } // take values from arguments
    const userID = getState().auth.userID
    return database
      .ref(`users/${userID}/expenses`) // async here
      .push(newExpense)
      .then(ref => dispatch(addExpense({ id: ref.key, ...newExpense })))
    // after adding the new recorde to the DB retrieve the ID generated from firebase and create a new object to the dispatched to the reducer, updating the store
  }
}

export const removeExpense = id => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const removeExpenseAsync = id => (dispatch, getState) => {
  const userID = getState().auth.userID
  return database
    .ref(`users/${userID}/expenses/${id}`)
    .remove()
    .then(() => dispatch(removeExpense(id)))
}

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const editExpenseAsync = (id, updates) => (dispatch, getState) => {
  const userID = getState().auth.userID
  return database
    .ref(`users/${userID}/expenses/${id}`)
    .update(updates)
    .then(() => dispatch(editExpense(id, updates)))
}
