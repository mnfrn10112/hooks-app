
export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [
                ...initialState, action.payload
            ];
        case '[TODO] Remove Todo':
            return [
                ...initialState.filter(e => e.id !== action.payload)
            ];
        case '[TODO] Toggle Todo':
            return [
                ...initialState.map(e => (e.id === action.payload ? { ...e, done: !e.done } : e))
            ];
        default:
            return initialState;
    }
};