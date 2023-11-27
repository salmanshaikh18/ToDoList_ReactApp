import { useContext } from 'react'
import TodoContext from '../../context/TodoContext'
import Todo from '../Todo/Todo'

const TodoList = () => {

    const {list, setList} = useContext(TodoContext)

    return (
        <div>
            {list.length > 0 &&
                list.map(todo => <Todo
                    key={todo.id} iseFinished={todo.finished} id={todo.id} todoData={todo.todoData}
                    changeFinished={(isFinished) => {
                        const updatedList = list.map(t => {
                            if (t.id === todo.id) {
                                todo.finished = isFinished
                            }
                            return t;
                        })
                        setList(updatedList)
                    }}
                    onDelete={() => {
                        const updatedList = list.filter(t => t.id != todo.id )
                        setList(updatedList)
                    }}
                    onEdit={(todoText) => {
                       const updatedList = list.map(t => {
                        if (t.id == todo.id) {
                            todo.todoData = todoText
                        }
                        return t
                       })
                       setList(updatedList)
                    }}
                />)}
        </div>
    )
}

export default TodoList