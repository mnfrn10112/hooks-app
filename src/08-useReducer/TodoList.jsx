import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos=[], onRemove }) => {
    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    <TodoItem key={todo.id}  {...todo} onRemove={onRemove} />
                ))
            }
        </ul>
    );
};
