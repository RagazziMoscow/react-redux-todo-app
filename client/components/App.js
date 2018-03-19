import React, {Component} from 'react';

import VisibleTodoList from './../containers/VisibleTodoList';
import AddTodo from './../containers/AddTodo';

export default class App extends Component {
    render() {
        return (
            <div>
                <p>Компонент App 1312</p>
                <VisibleTodoList />
                <AddTodo />
            </div>
        );
    }
}