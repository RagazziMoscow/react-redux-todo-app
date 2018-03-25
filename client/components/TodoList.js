import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {

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