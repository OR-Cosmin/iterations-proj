import React from 'react'

const Button = ({ startIteration, text }) => {

  return (
    <div>
     <button className='start--btn' onClick = {startIteration}>
     {text} </button>
    </div>
  )
}

export default Button