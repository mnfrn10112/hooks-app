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

    const handelNewTodo = (todo) => {
        console.log(todo);
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch(action);
    };

    const handelDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        };
        dispatch(action);
    };

    useEffect(() => {
        if (todos)
            localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    console.log(todos);

    return (
        <>
            <h1>Toodo App ({todos.length}) <small>pendientes: 2</small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onRemove={handelDeleteTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd
                        onNewTodo={handelNewTodo}
                    />
                </div>
            </div>
        </>
    );
};
