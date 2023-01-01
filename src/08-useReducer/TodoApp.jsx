import { useReducer } from "react";
import { TodoAdd, TodoList, todoReducer } from "./";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la priedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() + 10,
        description: 'Recolectar la priedra del poder',
        done: false,
    },
];

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handelNewTodo = (todo) => {
        console.log(todo);
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch(action);
    };

    console.log(todos);

    return (
        <>
            <h1>Toodo App (10) <small>pendientes: 2</small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
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
