import { useEffect, useReducer } from "react";
import { TodoAdd, TodoList, todoReducer } from "./";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la priedra del alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() + 10,
    //     description: 'Recolectar la priedra del poder',
    //     done: false,
    // },
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

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

    console.log(todos);

    const getDos = () => todos.filter(e => e.done).length;

    return (
        <>
            <h1>Toodo App ({todos.length}) <small>pendientes: {getDos()}</small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onRemove={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4> Agregar TODO </h4>
                    <hr />
                    <TodoAdd
                        onNewTodo={handleNewTodo}
                    />
                </div>
            </div>
        </>
    );
};
