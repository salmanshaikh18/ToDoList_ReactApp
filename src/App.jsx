import React, { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

const App = () => {

  const [list, setList] = useState([
    { id: 1, todoData: 'todo1', finished: false },
    { id: 2, todoData: 'todo2', finished:  false},
])

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center text-3xl text-red-500'>ToDo App</h1>
      <AddTodo 
      updateList={(todo) => setList([
        ...list, {id: list.length + 1, todoData: todo, finished: false}
      ])} 
      />
      <TodoList list={list} updateList={setList} />
    </div>
  )
}

export default App