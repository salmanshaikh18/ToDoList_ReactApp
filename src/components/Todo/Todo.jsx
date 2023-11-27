import React from 'react'

const Todo = ({ todoData }) => {
    return (
        <div className='mt-5'>
            <input
                type="checkbox"
                className='w-5 h-5 m-2'
            />
            {todoData}
            <button className='p-2 bg-red-500 rounded m-2'>Edit</button>
            <button className='p-2 bg-red-500 rounded m-2'>Delete</button>
        </div>
    )
}

export default Todo