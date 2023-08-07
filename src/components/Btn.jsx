import React from 'react'
import '../App.css'

const Btn = ({name}) => {
  return (
    <button 
        className='btn p-[10px] rounded-[36px] text-white'
    >{name}</button>
  )
}

export default Btn