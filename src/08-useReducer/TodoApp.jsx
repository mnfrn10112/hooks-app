import { useTodo } from "../hooks/useTodo";
import { TodoAdd, TodoList } from "./";

export const TodoApp = () => {

    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, getDos } = useTodo();

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
