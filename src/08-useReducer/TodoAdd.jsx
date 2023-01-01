import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { todotext, onInputChange, onResetForm } = useForm({
        todotext: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if (todotext.length <= 1) return;
        onNewTodo && onNewTodo({
            id: new Date().getTime(),
            description: todotext,
            done: false,
        });
        onResetForm();
    };


    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Que hay que hacer?"
                    className="form-control"
                    name="todotext"
                    value={todotext}
                    onChange={onInputChange}
                />
                <button type="sumit"
                    className="btn btn-outline-primary mt-3">
                    Agregar
                </button>
            </form>
        </>
    );
};
