export const NEW_TODO = 'NEW_TODO';

export const newTodo = todo => {
    return {
        type: NEW_TODO,
        payload: todo
    };
};