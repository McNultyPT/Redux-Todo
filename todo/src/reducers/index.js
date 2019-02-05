import { NEW_TODO } from '../actions';

const initialState = {
    todos: [
        { value: null },
        { completed: false }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_TODO:
            return {
                ...state,
                todos: action.payload.todos
            };
        default:
            return state;
    }
};

export default reducer;