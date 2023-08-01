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
      <div className='bg-purple-700 text-white font-bold text-4xl'>
        <h1 className='ml-8 py-2'>TODO</h1>
      </div>
      <TodoInput addTask={addTask} />

      <h1 className='font-bold text-2xl text-white py-4 mx-8'>
        Your Tasks
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
