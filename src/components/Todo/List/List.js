import React, {Component} from 'react';
import './List.css';
import Item from "../Item/Item";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {deleteTodoById, finishTodoById} from "../../../ac/todo";
import add from "./add.svg"
import sort from "./sort.svg"

class List extends Component {

    constructor() {
        super();
        this.state = {
            isDescSort: false,
        };
        this.toggleSortOrder = this.toggleSortOrder.bind(this);
    }

    handleDelete = (id) => (ev) => {
        // скрыть форму на случай, если она открыта для редактирования
        this.props.hideForm();
        this.props.deleteTodoById(id)
    };
    handleFinished = (id) => (ev) => {
        this.props.finishTodoById(id);
    };

    toggleSortOrder() {
        this.setState({
            isDescSort: !this.state.isDescSort
        })
    }


    render() {
        const sortOrder = (this.state.isDescSort) ? <span>Sort order: desc</span> : <span>Sort: asc</span>;
        const itemList = this.props.todoList.sort((prev, next) => {
            return (this.state.isDescSort) ?
                ((prev.title < next.title) ? -1 : (prev.title > next.title) ? 1 : 0) :
                ((prev.title > next.title) ? -1 : (prev.title < next.title) ? 1 : 0)
        })
            .map((item) => {
                return <Item key={item.id}
                             header={item.title}
                             body={item.body}
                             isFinished={item.isFinished}
                             handleDelete={this.handleDelete(item.id)}
                             handleEdit={this.props.setEdit(item.id)}
                             handleFinished={this.handleFinished(item.id)}
                />
            });
        return (
            <div className="todo-list-wrapper">
                <div className="todo-common-menu">
                    <span>Todo list. </span> {sortOrder}
                    <div className="todo-common-menu__sort">
                        <span onClick={this.props.setAdd}><img src={add} alt={"add item"}/></span>
                        <span onClick={this.toggleSortOrder}><img src={sort} alt={"toggle order"}/></span>
                    </div>
                </div>
                {itemList}
            </div>
        )
    }
}

List.propTypes = {
    setAdd: PropTypes.func.isRequired,
    setEdit: PropTypes.func.isRequired,
    deleteTodoById: PropTypes.func.isRequired,
    finishTodoById: PropTypes.func.isRequired,
    todoList: PropTypes.array,

};

export default connect((state) => {
    return {todoList: state.todos}
}, {deleteTodoById, finishTodoById})(List)