import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import '../styles/react_dates_overrides.css'
import M from 'materialize-css'
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters'

const ExpensesFilters = ({
  filters,
  setText,
  setStartDate,
  setEndDate,
  setSortByDate,
  setSortByAmount
}) => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  const [calendarFocused, setCalendarFocused] = useState(null)

  const handleDatesChange = ({ startDate, endDate }) => {
    // moment objects
    setStartDate(startDate)
    setEndDate(endDate)
  }

  return (
    <React.Fragment>
      <div className='row'>
        <form className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <i class='material-icons prefix green-text'>search</i>
              <input
                type='text'
                value={filters.text}
                onChange={e => {
                  setText(e.target.value)
                }}
              ></input>
              <label htmlFor='textarea1'>Search Expense</label>
            </div>
            <div className='blue-text input-field col s12 m4 l6'>
              <i class='material-icons prefix green-text'>filter_list</i>
              <select
                id='filter-picker'
                value={filters.sortBy}
                onChange={e =>
                  e.target.value === 'date'
                    ? setSortByDate()
                    : setSortByAmount()
                }
              >
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
              </select>
              <label>Sort By:</label>
            </div>
            <div className='input-field col offset-s1 s10 m8 l5'>
              <DateRangePicker
                startDate={filters.startDate}
                endDate={filters.endDate}
                onDatesChange={handleDatesChange}
                focusedInput={calendarFocused}
                startDateId='your_unique_start_date_id'
                endDateId='your_unique_end_date_id'
                onFocusChange={focusedInput => setCalendarFocused(focusedInput)}
                isOutsideRange={() => {
                  false
                }}
                showClearDates={true}
                numberOfMonths={1}
              />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({ filters: state.filters })
const mapDispatchToProps = dispatch => ({
  setText: text => dispatch(setTextFilter(text)),
  setSortByDate: () => dispatch(sortByDate()),
  setSortByAmount: () => dispatch(sortByAmount()),
  setStartDate: date => dispatch(setStartDate(date)),
  setEndDate: date => dispatch(setEndDate(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesFilters)
