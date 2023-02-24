import React, { useState } from 'react'

function ToDo() {
    let initialTodos = ['Learn Angular', 'Learn React', 'Clean Home', 'Watch Movie'];
    const [todos, setTodos] = useState(initialTodos);
    const [todoInp, setTodoInp] = useState("");
    const [editTodoInd, setEditTodoInd] = useState(null);

    const onDelete = (index) => {
        let filteredTodos = todos.filter((ele, i) => index !== i);
        // console.log(filteredTodos);
        setTodos(filteredTodos);
    }
    const onChange = (e) => {
        setTodoInp(e.target.value);
    }
    const onAdd = () => {
        if (editTodoInd === null) {
            setTodos([...todos, todoInp]);
        } else {
            let updatedTodos = [...todos];
            updatedTodos[editTodoInd] = todoInp;
            setTodos(updatedTodos);
            setEditTodoInd(null);
        }
        setTodoInp("");
    }
    const userEdit = (todo, index) => {
        setTodoInp(todo);
        setEditTodoInd(index);
    }

    return (
        <div>
            <input type='text' name='todo-input' value={todoInp} onChange={onChange} />
            <button onClick={onAdd}>
                {editTodoInd === null ? 'Add' : 'Update'}
            </button>
            <ol>
                {todos.map((todo, index) =>
                    <li key={index}>
                        {todo}
                        {
                            <div>
                                <button onClick={() => onDelete(index)}>Delete</button>
                                <button onClick={() => userEdit(todo, index)}>Edit</button>
                            </div>
                        }
                    </li>)}
            </ol>
        </div>
    )
}
export default ToDo
