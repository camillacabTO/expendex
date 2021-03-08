import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseItem = ({ id, description, amount, createdAt }) => {
  return (
    <div className='collection-item' id='item'>
      <Link className='expense-item' to={`/edit/${id}`}>
        <div>
          <p className='description_title'>{description}</p>
          <p>{numeral(amount / 100).format('$0,0.00')}</p>
        </div>
        <p>{moment(createdAt).format('MMMM, Do YYYY')}</p>
      </Link>
    </div>
  )
}

export default ExpenseItem

// <div className='collection-item expense-item'>
//   <div>
//     <Link to={`/edit/${id}`}>
//       <p className='description_title'>{description}</p>
//     </Link>
//     <p>{moment(createdAt).format('MMMM, Do YYYY')}</p>
//   </div>
//   <div>{numeral(amount / 100).format('$0,0.00')}</div>
// </div>
