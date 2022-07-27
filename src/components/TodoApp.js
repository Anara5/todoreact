import React from 'react';
import { useState, useEffect } from 'react';
import Form from './Form';
import OneTodo from './OneTodo';

function TodoForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [list, setList] = useState(() => {
        const initialList = localStorage.getItem("list");
        if (initialList) {
            return JSON.parse(initialList);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }
    , [list]);

    const addTodo = () => {
        const newTodo = {
            id: new Date().getTime(),
            title: title,
            description: description,
            completed: false,
        };
        if (title !== '') {
            setList([...list, newTodo]);
            setTitle('');
            setDescription('');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(e);
    }

    const handleChangeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const handleChangeDescription = (e) => {
        e.preventDefault();
        setDescription(e.target.value);
    }

    const removeTodo = (id) => {
        setList([...list.filter(todo => todo.id !== id)]);
    }

    const handleToggle = (id) => {
        setList([...list.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })]);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo(e);
        }
    }

    return (
        <>
            <Form
                handleSubmit={handleSubmit}
                handleChangeTitle={handleChangeTitle}
                handleChangeDescription={handleChangeDescription}
                title={title}
                description={description}
                keyPress={handleKeyPress}
                />

            <div className="todoList" id="todoList">
                {list.map((todo) => {
                    return (
                        <OneTodo 
                            key={todo.id}
                            todo={todo}
                            removeTodo={removeTodo}
                            toggleTodo={handleToggle}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default TodoForm;
