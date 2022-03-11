import React from 'react'

function Input({placeholder = 'Please, just a little bit spicy only.'}) {
  return (
    <input className='input' type="text"  placeholder={`${placeholder}`}/>
  )
}

export default Input