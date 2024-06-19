import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './app/components/addTodo'
import Todos from './app/components/todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-xl font-bold text-black underline'>Lets learn Redux Toolkit</h1>
     <AddTodo/>
     <div className='bg-gray-800 rounded-lg mt-4'>
     <Todos/>
     </div>
    </>
  )
}

export default App
