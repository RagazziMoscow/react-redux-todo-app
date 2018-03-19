import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from './../actions';

class AddTodo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            lastId: props.lastId,
            content: ''
        };
        this.onContentChange = this.onContentChange.bind(this);
        this.onClickTodo= this.onClickTodo.bind(this);

    }
    onContentChange(e) {
        this.setState({content: e.target.value});
    }
    onClickTodo(e) {
        const { addTodo } = this.props;
        const text = this.state.content;
        const todo = {
            id: ++this.state.lastId,
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


const mapStateToProps = (state) => {
    return {
        lastId: state.todos[state.todos.length - 1].id
    };
}


const mapDispatchToProps = (dispatch) => {
    return{
        addTodo: (todo) => {
            dispatch(addTodo(todo));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);


