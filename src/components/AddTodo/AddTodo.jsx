import React from 'react'

const AddTodo = () => {
  return (
    <div className='m-4'>
        <input 
        type="text"
        placeholder="Add your next todo..."
        className='p-2 rounded text-black border-none outline-none'
        />
        <button className={'p-2 bg-red-500 rounded m-2'}>Add</button>
    </div>
  )
}

export default AddTodo