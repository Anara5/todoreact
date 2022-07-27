import React from 'react';

function Form({handleSubmit, handleChangeTitle, handleChangeDescription, title, description, handleKeyPress}) {

    return (
        <div className="todo">
            <form onSubmit={handleSubmit} className="todo-form">
                <p>Title</p>
                <input type="text" id="txtTodoItemToAdd" value={title} onChange={handleChangeTitle} onKeyDown={handleKeyPress} />
                <p>Description</p>
                <input type="text" value={description} onChange={handleChangeDescription}></input>
                <button type="submit" className="todo-form--button" id="btnAddTodo">Add</button>
            </form>
        </div>
    )
}

export default Form;
