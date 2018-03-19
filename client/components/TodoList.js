import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {

    render() {
        const {todos, onTodoCLick} = this.props;
        
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