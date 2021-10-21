import PropTypes from "prop-types";
import React, {useState, useEffect, useContext} from 'react';
import { TodosContext } from "../../context/todos-context";

import {GoTrashcan, GoCheck} from 'react-icons/go';

import './styles.css'

export const Todo = (props)=>{

    const todosContext = useContext(TodosContext);

    const [isComplete, setIsComplete] = useState(false);

    //sets property, fires off when site first loads, on init of component, grab the is complete property from global state
    useEffect( () => {
        setIsComplete(props.isComplete)
    }, []);

    useEffect(() =>{
        //everytime isComplete is updated, user clicks on the checkmark, call the below code
        todosContext.updateTodo(props.todoId, isComplete);

    }, [isComplete])

    const toggleCompleteTodo = () => {
        setIsComplete (!isComplete);
    }

    const deleteTodo = ()=> {
        todosContext.deleteTodo(props.todoId);
    }
    return (
        //style created based on condition
        <div className={`todo $(props.color)`} style={isComplete ? {opacity:0.2} : {}}> 
            <div>
                <p className="todo-text">{props.text} </p>
                <p className="todo-date">{props.date} </p>
            </div>

            <div className="todo-btns">
                <button className="todo-complete" onClick={toggleCompleteTodo}> 
                    <GoCheck className="todo-icon" style={{ fontSize:"35px"}} />
                </button>
                <button className="todo-delete" onClick={deleteTodo}>
                    <GoTrashcan className="todo-icon" style={{ fontSize: "35px"}}/>
                </button>
            </div>
        </div>
        
    )
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    priority:PropTypes.bool,
    isComplete: PropTypes.bool.isRequired
}

Todo.defaultProps={
    text: "",
    date: "",
    color: "grey",
    priority:false,
    isComplete:false,
}