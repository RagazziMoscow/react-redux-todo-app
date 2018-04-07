import { TOGGLE_TODO_STATUS } from '../constants';
import { ADD_TODO } from '../constants';
import { CHANGE_FILTER } from '../constants';
import { FETCH_TODOS } from '../constants';

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO_STATUS,
        id: index
    };
}

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    };
}

export function changeFilter(filter) {
    return {
        type: CHANGE_FILTER,
        filter
    };
}

export function fetchTodos() {

    return async (dispatch) => {
        const res = await fetch('/todos', {
            method: 'post'
        });
        const data = await res.json();
        dispatch({
            type: FETCH_TODOS,
            payload: data
        });       
    };
}