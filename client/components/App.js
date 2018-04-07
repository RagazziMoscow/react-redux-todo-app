import React, {Component} from 'react';

import VisibleTodoList from './../containers/VisibleTodoList';
import Filter from '../containers/Filter';
import VisibleAddTodo from '../containers/VisibleAddTodo';

export default class App extends Component {
    render() {
        return (
            <div>
                <h3 className="title">Приложение todo</h3>
                <VisibleTodoList />
                <Filter />
                <VisibleAddTodo />
            </div>
        );
    }
}