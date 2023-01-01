
export const TodoItem = ({ description, id, onRemove }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{description}</span>
            <button
                onClick={() => onRemove(id)}
                className="btn btn-danger"
            > Borrar</button>
        </li>
    );
};
