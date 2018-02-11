import React, {Component} from 'react';
import './Todo.css';
import Form from "./Form/Form";
import List from "./List/List";

export default class Todo extends Component {

    constructor() {
        super();
        this.setAdd = this.setAdd.bind(this);
        this.setEdit = this.setEdit.bind(this);
        this.hideForm = this.hideForm.bind(this);
        this.state = {
            isEdit: false,
            editId: null,
            isAdd: false,
        }
    }

    setEdit = (id) => () => {
        this.setState({
            isEdit: true,
            editId: id,
        })
    };

    setAdd() {
        this.setState({
            isAdd: true
        })
    }

    hideForm() {
        this.setState({
            isEdit: false,
            isAdd: false,
            editId: null
        })
    }


    render() {
        const form = (this.state.isEdit || this.state.isAdd) ?
            <Form isEdit={this.state.isEdit}
                  isAdd={this.state.isAdd}
                  id={this.state.editId}
                  hideForm={this.hideForm}
            />
            : null;
        return (
            <div className="app-wrapper">
                {form}
                <List setEdit={this.setEdit}
                      setAdd={this.setAdd}
                      hideForm={this.hideForm}
                />
            </div>
        )
    }
}