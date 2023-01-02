
export const TodoItem = ({ description, id, onRemove, onToggleTodo, done }) => (
    <li className="list-group-item d-flex justify-content-between">
        <span
            className={`align-self-center ${done && 'text-decoration-line-through'}`}
            onClick={() => onToggleTodo(id)}
        >{description}</span>
        <button
            onClick={() => onRemove(id)}
            className="btn btn-danger"
        > Borrar</button>
    </li>
);
