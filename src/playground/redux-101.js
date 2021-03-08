import { createStore } from 'redux'

// Action generators - functions that return action objects

const changeCount = ({ type, value = 1 } = {}) => {
  if (!type) return
  return {
    type,
    value
  }
}

// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//   type: 'INCREMENT',
//   incrementBy
// })

// const decrementCount = ({ decrementBy = 1 } = {}) => ({
//   type: 'DECREMENT',
//   decrementBy
// })

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.value
      }
    case 'DECREMENT':
      return {
        count: state.count - action.value
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
})

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(changeCount({ type: 'INCREMENT', value: 40 }))
store.dispatch(changeCount({ type: 'DECREMENT', value: 20 }))

// store.dispatch(incrementCount())

// store.dispatch(resetCount())

// store.dispatch(decrementCount())

// store.dispatch(decrementCount({ decrementBy: 10 }))

// store.dispatch(setCount({ count: -100 }))
