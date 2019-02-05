export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addNewTodo = newTodo => {
    return {
        type: ADD_TODO,
        payload: newTodo
    };
}

export const toggleCompleted = index => {
    return {
        type: TOGGLE_COMPLETED,
        payload: index
    };
}

export const clearCompleted = todo => {
    return {
        type: CLEAR_COMPLETED,
        payload: todo
    };
}

