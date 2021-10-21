import { useForm } from 'react-hook-form'
import { Input } from '../input-field';
import "./styles.css"
import {v1 as uuidv1} from 'uuid';
import { useContext } from 'react';
import { TodosContext } from '../../context/todos-context';
import { useHistory } from 'react-router';

export const NewTodoForm = () => {

    const todoContext = useContext(TodosContext);
    let history = useHistory();

    const {register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) =>{
            const todo =data;

            //add a unique id to the todo
            todo.id = uuidv1();

            //default status of false
            todo.isComplete = false;

            //add  the todo to the global state/context
            todoContext.addTodo(todo);
            console.log("Added new todo", todo);

            //Navigate to the home page
            history.push("/");
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {}
            <Input
                type="text"
                name="title"
                label="Todo (eg do laundry)"
                errors={errors}
                register={register}
                validationSchema={
                    {
                        required: "Todo text is required",
                        minLength:{
                            value:3,
                            message: "please enter at least 3 characters"
                        }
                    }
                }
                required
            />

            <Input
                type="date"
                name="date"
                label="Due Date"
                errors={errors}
                register={register}
                validationSchema={
                    {
                        required: "Todo deadline is required",
                    
                    }
                    
                }
                required
            />
            <input type="submit"/>
        </form>
    )
}