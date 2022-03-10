import React, { useState, useRef, useEffect } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "todoAPP"

function App() {

    const [todo, setTodo] = useState([])

    const todoBox = useRef()

    useEffect(() => {
        const storeTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storeTodo) { setTodo(storeTodo) }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todo))
    }, [todo])

    function handleAdd(event) {
        const name = todoBox.current.value
        if (name === "") { return }
        setTodo(prevTodo => {
            return [...prevTodo, {id:uuidv4(),name:name,complete:false}]
        })
        todoBox.current.value = null
    }

    function handleClear() {
        const todoCopy = todo.filter(todo => !todo.complete)
        setTodo(todoCopy)
    }

    function checkToggle(event) {
        //always create copy of state
        const todoCopy = [...todo]
        const todoitem = todoCopy.find(todoitem => todoitem.id === event)
        todoitem.complete = !todoitem.complete
        setTodo(todoCopy)
    }


    return (
        <>
            <ToDoList checkToggle={ checkToggle } todos={ todo }/>
            <input ref={todoBox} type="text" />
            <button onClick={ handleAdd }>Add Todo</button>
            <button onClick={ handleClear }>Clear completed Todo</button>
            <div>{ todo.filter(todo=>!todo.complete).length}</div>
        </>
  );
}

export default App;
