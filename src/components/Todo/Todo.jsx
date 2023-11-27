import React, { useState } from 'react'

const Todo = ({ todoData, isFinished, changeFinished, onDelete, onEdit }) => {

    const [finished, setFinished] = useState(isFinished)

    const [isEditing, setIsEditing] = useState(false)

    const [editText, setEditText] = useState(todoData)

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
            {(isEditing) ? <input className='text-black' type="text" value={editText} onChange={e => setEditText(e.target.value)} /> : <spna>{todoData}</spna>}
            <button
                className='p-2 bg-red-500 rounded m-2' onClick={() => {
                    setIsEditing(!isEditing)
                    onEdit(editText)

                }}>
                {(!isEditing) ? 'Edit' : 'Save'}
            </button>
            <button className='p-2 bg-red-500 rounded m-2' onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Todo