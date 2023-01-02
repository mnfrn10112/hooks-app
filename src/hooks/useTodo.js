import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};


export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const handleNewTodo = (todo) => {
        console.log(todo);
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        };
        dispatch(action);
    };

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        };
        dispatch(action);
    };

    useEffect(() => {
        if (todos)
            localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const getDos = () => todos.filter(e => !e.done).length;

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        getDos
    };
};