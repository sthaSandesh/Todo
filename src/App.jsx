import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [List, setList] = useState([])


  let addTask = (inputText) => {
    setList([...List, inputText])
  }

  return (
    <div >
      <TodoInput addTask={addTask} />

      <h1>
        Todo
        <hr />
        {List.map((task, index) => {
          return (
            <TodoList key={index} task={task} />
          )
        })}
    </h1>
    </div>
  )
}

export default App
