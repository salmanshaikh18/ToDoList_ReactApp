import React, { useState } from 'react'

const Todo = ({ todoData, isFinished, changeFinished, onDelete }) => {

    const [finished, setFinished] = useState(isFinished)

    return (
        <div className='mt-5'>
            <input
                type="checkbox"
                className='w-5 h-5 m-2'
                checked={finished}
                onChange={(e) => {
                    setFinished(e.target.checked)
                    changeFinished(e.target.checked)
                }}
            />
            {todoData}
            <button className='p-2 bg-red-500 rounded m-2'>Edit</button>
            <button className='p-2 bg-red-500 rounded m-2' onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Todo