import React, { useState, useEffect } from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import '../styles/react_dates_overrides.css'
import M from 'materialize-css'
import { SingleDatePicker } from 'react-dates'

export default function ExpenseForm({ handleSubmit, selectedExpense }) {
  const [description, setDescription] = useState(
    selectedExpense ? selectedExpense.description : ''
  )
  const [amount, setAmount] = useState(
    selectedExpense ? (selectedExpense.amount / 100).toFixed(2).toString() : '' // format to 2 decimals and convert to string
  )
  const [note, setNote] = useState(selectedExpense ? selectedExpense.note : '')
  const [createdAt, setCreatedAt] = useState(
    selectedExpense ? moment(selectedExpense.createdAt) : moment() // use the unix time stamp to create a moment obj
  )
  const [calendarFocused, setCalendarFocused] = useState(false)
  const [error, setError] = useState('')

  const inputRef = React.useRef()
  const inputRef2 = React.useRef()

  const formatAndSetAmount = e => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      // at least one number before the dot and 2 after the dot
      // matches regex expression
      setAmount(amount)
    }
  }
  useEffect(() => {
    M.AutoInit()
    if (selectedExpense) {
      inputRef.current.focus()
      inputRef2.current.focus()
    }
  }, [])

  const onSubmit = e => {
    e.preventDefault()
    if (!amount || !description) {
      return setError('Please provide description and amount')
    }

    handleSubmit({
      description,
      note,
      amount: parseFloat(amount, 10) * 100,
      createdAt: createdAt.valueOf() // return Unix timestamp,
    })
    setError('')
  }

  return (
    <div className='row'>
      {error && (
        <div className='error'>
          <i className='fa fa-times-circle'></i>
          {error}
        </div>
      )}
      <form onSubmit={onSubmit} className='col s12'>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              id='description'
              type='text'
              autoFocus
              onChange={e => setDescription(e.target.value)}
              value={description}
              ref={inputRef}
            />
            <label htmlFor='description'>Description</label>
          </div>
          <div className='input-field col s12'>
            <input
              type='text'
              onChange={e => formatAndSetAmount(e)}
              value={amount}
              ref={inputRef2}
            />
            <label htmlFor='amount'>Amount</label>
          </div>
          <div className='input-field col s12'>
            <textarea
              id='textarea1'
              className='materialize-textarea'
              onChange={e => setNote(e.target.value)}
              value={note}
              ref={inputRef}
            ></textarea>
            <label htmlFor='textarea1'>Notes</label>
          </div>
          <div className='input-field col s12'>
            <SingleDatePicker
              date={createdAt}
              onDateChange={date => (date ? setCreatedAt(date) : null)} // prevents user from erasing the data field
              focused={calendarFocused}
              onFocusChange={({ focused }) => setCalendarFocused(focused)}
              id='single-day-picker'
              isOutsideRange={() => {
                false
              }}
              numberOfMonths={1}
            />
          </div>
          <div className='input-field col s12'>
            <button className='waves-effect waves-light btn-large green lighten-1'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
