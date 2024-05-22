import React from "react";
import propTypes from "prop-types";
import Button from "./Button";
import './style/TodoItem.css';

const TodoItem = ({todo, del, openModal}) => {
    const delById = id =>{
        del(id)
    }
    return(
        <div className="container">
            <p className="title-item">{todo.title}</p>
            <div className="tombol">
                <Button text="Edit" variant="success" action={openModal} />
                <Button text="delete" variant="warning" action={() => delById(todo.id)}/>
            </div>
        </div>
    )
};

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    del: propTypes.func.isRequired
}

export default TodoItem;