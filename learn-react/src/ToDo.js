import React from 'react';

function ToDo({ todo, checkToggle }) {
    function handleToggleClick() {
        checkToggle(todo.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={ handleToggleClick}/>
                {todo.name}
            </label>
        </div>

    )
}

export default ToDo;