import React, {Component} from 'react';

import VisibleTodoList from './../containers/VisibleTodoList';
import Filter from '../containers/Filter';
import AddTodo from '../containers/AddTodo';

export default class App extends Component {
    render() {
        return (
            <div>
                <h3 className="title">Приложение todo</h3>
                <VisibleTodoList />
                <Filter />
                <AddTodo />
            </div>
        );
    }
}