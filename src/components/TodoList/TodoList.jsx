import Todo from '../Todo/Todo'

const TodoList = ({ list, setList }) => {

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
                            return todo;
                        })
                        setList(updatedList)
                    }}
                />)}
        </div>
    )
}

export default TodoList