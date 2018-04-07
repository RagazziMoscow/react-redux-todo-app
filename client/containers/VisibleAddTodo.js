import React from 'react';
import { connect } from 'react-redux';

import AddTodo from './../components/AddTodo';
import { addTodo } from '../actions';


const mapStateToProps = (state) => {
    const { todos } = state;
    return {
        length: todos.length
    };

}


const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            dispatch(addTodo(todo));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);


