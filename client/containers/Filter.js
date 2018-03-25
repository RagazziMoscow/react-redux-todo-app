import React from 'react';
import { connect } from 'react-redux';

import { changeFilter } from '../actions';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.setFilter = this.setFilter.bind(this);
    }
    setFilter(value) {
        const { changeFilter } = this.props;
        changeFilter(value);
    }
    render() {
        const { filter } = this.props;  

        return(
            <div className="filter">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button"
                            className="btn btn-secondary"
                            disabled={filter === "SHOW_ALL"}
                            onClick={this.setFilter.bind(this, "SHOW_ALL")}>
                            Показать все
                    </button>
                    <button type="button"
                            className="btn btn-secondary"
                            disabled={filter === "SHOW_COMPLETED"}
                            onClick={this.setFilter.bind(this, "SHOW_COMPLETED")}>
                            Показать выполненные
                    </button>
                    <button type="button"
                            className="btn btn-secondary"
                            disabled={filter === "SHOW_OPENED"}
                            onClick={this.setFilter.bind(this, "SHOW_OPENED")}>
                            Показать открытые
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilter: (filter) => {
            dispatch(changeFilter(filter));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);