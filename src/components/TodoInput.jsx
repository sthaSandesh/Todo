import React, { useState } from 'react'

function TodoInput(props) {
  const [inputText, setInputText] = useState('')


  return (
    <div>
      <input
        type="text"
        placeholder='Enter Your Task Here'
        value={inputText}
        className='rounded-lg border-2 border-purple-600 p-2 m-2 w-80 text-purple-600 font-bold'
        onChange={(e) => {setInputText(e.target.value)}}
      />
      <button
        onClick={() => {
          props.addTask(inputText)
          setInputText("")
        }}
        className='bg-purple-600 text-white p-2 rounded-lg font-bold'
      >Add</button>
    </div>
  )
}

export default TodoInput