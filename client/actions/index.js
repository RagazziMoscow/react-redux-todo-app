export function toggleTodo(index) {
    return {
        type: 'TOGGLE_TODO_STATUS',
        id: index
    };
}

export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        todo
    };
}

export function changeFilter(filter) {
    return {
        type: 'CHANGE_FILTER',
        filter
    };
}