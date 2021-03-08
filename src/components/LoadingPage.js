import React from 'react'
import spinner from './spinner.gif'

const LoadingPage = () => {
  return (
    <div id='loading-page'>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
        className='valign-wrapper center-align'
      />
    </div>
  )
}

export default LoadingPage
