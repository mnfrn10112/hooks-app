import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onRemove, onToggleTodo }) => {
    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    <TodoItem key={todo.id}  {...todo}
                        onRemove={onRemove}
                        onToggleTodo={onToggleTodo} />
                ))
            }
        </ul>
    );
};
