import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center text-3xl text-red-500'>ToDo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App