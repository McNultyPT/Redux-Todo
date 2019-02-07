import { ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED } from '../actions';

const initialState = {
    todos: [
        { value: 'Walk the dog' },
        { completed: false }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
           const newTodo = {
               value: action.payload,
               completed: false
           };
           return {
               ...state,
               todos: [...state.todos, newTodo]
           };
        case TOGGLE_COMPLETED:
           return {
               ...state,
               todos: state.todos.map((todo, index) =>
                    action.payload === index ? {...todo, completed: !todo.completed} : todo
               )
           }
        case CLEAR_COMPLETED:
           return {
               ...state,
               todos: state.todos.filter(todo => !todo.completed)
           }
        default:
            return state;
    }
};

export default reducer;