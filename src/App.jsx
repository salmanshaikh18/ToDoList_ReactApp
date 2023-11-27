import React, { useState } from 'react'
import { useContext } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './context/TodoContext'

const App = () => {

  const [list, setList] = useState([
    { id: 1, todoData: 'todo1', finished: false },
    { id: 2, todoData: 'todo2', finished:  false},
  ])

  return (
   <TodoContext.Provider value={{list, setList}}>
     <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center text-3xl text-red-500'>ToDo App</h1>
      <AddTodo 
      updateList={(todo) => setList([
        ...list, {id: list.length + 1, todoData: todo, finished: false}
      ])} 
      />
      <TodoList />
    </div>
   </TodoContext.Provider>
  )
}

export default App