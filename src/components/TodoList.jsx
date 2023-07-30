import React from 'react'

const TodoList = (props) => {
  return (
    <li>
        <span>{props.task}</span>
    </li>
  )
}

export default TodoList