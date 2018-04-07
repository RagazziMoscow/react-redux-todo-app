import { connect } from 'react-redux';
import TodoList from './../components/TodoList';

import { toggleTodo, fetchTodos } from '../actions';

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        filter: state.filter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoCLick: (id) => {
            dispatch(toggleTodo(id));
        },
        fetchTodos: () => {
            dispatch(fetchTodos());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);