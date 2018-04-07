import React from 'react';

export default class AddTodo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            content: ''
        };
        this.onContentChange = this.onContentChange.bind(this);
        this.onClickTodo= this.onClickTodo.bind(this);

    }
    onContentChange(e) {
        this.setState({content: e.target.value});
    }
    onClickTodo(e) {
        const { addTodo, length } = this.props;
        const text = this.state.content;
        const todo = {
            id: length + 1,
            text,
            status: 'active'
        };

        addTodo(todo);

        this.setState({
            content: ''
        });
    }
    render() {
        return (
            <form className="form-inline add-todo">
                <div className="form-group mx-sm-3 mb-2">
                    <input ref="content" 
                           type="text"
                           className="form-control"
                           id="inputPassword2"
                           placeholder="Задача"
                           onChange={this.onContentChange}
                           value={this.state.content}
                    />
                </div>
                <button type="button" className="btn btn-primary mb-2" onClick={this.onClickTodo}>Добавить</button>
            </form>
        );
    }
}