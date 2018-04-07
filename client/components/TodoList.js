import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
    componentDidMount() {
        const { fetchTodos } = this.props;
        fetchTodos();
    }
    render() {
        const { filter, onTodoCLick} = this.props;
        let { todos } = this.props;

        if (filter === 'SHOW_OPENED') {
            todos = todos.filter(todo => {
                return (todo.status === 'active');
            });
        }

        if (filter === 'SHOW_COMPLETED') {
            todos = todos.filter(todo => {
                return (todo.status === 'closed');
            });
        }
        
        if (todos.length == 0) {
            return (
                <div className="todos-not-loaded">
                    <p>У вас пока нет заданий</p>
                </div>
            );
        }

        return (
            <div className="todos list-group">
                {todos.map((todo) =>
                        <Todo content={todo.text}
                              status={todo.status}
                              toggleFunc={() => onTodoCLick(todo.id)}
                              key={todo.id}
                        />
                )}
            </div>
        );
    }
}