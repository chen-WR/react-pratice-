import React from 'react';
import ToDo from './ToDo';

function ToDoList({ todos, checkToggle }) {
    return (
        todos.map(todo => {
            return <ToDo key={todo.id} checkToggle={ checkToggle } todo={ todo }/>
        })

    )
};

export default ToDoList;