import React from 'react'

const TodoList = (props) => {
  return (
    <li className='font-bold text-white text-2xl '>
      <span>{props.task}</span>
    </li>
  )
}

export default TodoList