import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div >
    <TodoInput /> 
   </div>
  )
}

export default App
