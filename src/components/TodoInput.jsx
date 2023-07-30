import React, { useState } from 'react'

function TodoInput() {
  const [inputText, setInputText] = useState('') 


  return (
    <div>
        <input 
        type="text" 
        placeholder='Enter Your Task Here'
        className='rounded-lg border-2 border-purple-600 p-2 m-2 w-80 text-purple-600 font-bold'
        onChange={(e) => setInputText(e.target.value)}
        />
        <button
        className='bg-purple-600 text-white p-2 rounded-lg font-bold'
        >Add</button>
        <div className='text-white'>
          {inputText}
        </div>
    </div>
  )
}

export default TodoInput