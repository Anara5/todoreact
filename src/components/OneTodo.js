import React from 'react';

function OneTodo({ todo, removeTodo, toggleTodo }) {


    return (
        <div key={todo.id}
            className={todo.completed ? "todo--completed" : "one-todo"}>

            <div 
                className={todo.completed ? "todo--toggle-completed" : "todo--toggle"}
                onClick={() => {
                    toggleTodo(todo.id);
                    }
                }>
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
            </div>

            <div>
                <button 
                    className={todo.completed ? "todo__button--remove" : "todo__button--remove--hide"}
                    onClick={() => removeTodo(todo.id)}>Remove
                </button>
            </div>
            
        </div>
    );
}

export default OneTodo;