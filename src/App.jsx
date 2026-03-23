import { useState } from 'react'
import TodoApp from './components/TodoApp'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="bg-dark min-vh-100 p-4">
      <h1 className="text-center mb-4 text-light">
        📝 Todo App — increase your prodctivity 
      </h1>
      <TodoApp />
    </div>
  )
}

export default App