import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'

function App() {
  const [List , setList] = useState([])


   let addTask = (inputText) => {
      setList([...List, inputText]) 
   }

  return (
   <div >
    <TodoInput addTask={addTask}/> 
   </div>
  )
}

export default App
