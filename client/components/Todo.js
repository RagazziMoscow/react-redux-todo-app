import React from 'react'


export default class Todo extends React.Component {
    render() {
        const {content, status, toggleFunc} = this.props;

        let itemClass = "list-group-item-action";
        let action;
        
        if (status == 'active') {
            itemClass = "list-group-item-danger";
            action = "В работе"; 
        } else {
            itemClass = "list-group-item-success";
            action = "Выполнен";
        }

        return(
            <div className={"todo list-group-item list-group-item-action " + itemClass}
                 onClick={toggleFunc}>
                <span>{content}</span>
                <a className="badge badge-primary badge-pill todo__action">{action}</a>
            </div>
        );
    }
}