import React, { useState } from 'react'

const AddTodo = ({updateList}) => {

    const [inputText, setInputText] = useState('')

  return (
    <div className='m-4'>
        <input 
        type="text"
        value={inputText}
        placeholder="Add your next todo..."
        className='p-2 rounded text-black border-none outline-none'
        onChange={(e) => setInputText(e.target.value)}
        />
        <button className='p-2 bg-red-500 rounded m-2' onClick={() => updateList(inputText)}>Add</button>
    </div>
  )
}

export default AddTodo