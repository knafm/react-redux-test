import React, {Component} from 'react';
import './Form.css';
import {addTodo, modifyTodoById} from '../../../ac/todo';
import {connect} from 'react-redux';
import cancel from './cancel.svg';
import add from './add.svg';
import PropTypes from 'prop-types';

class Form extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.okHandler = this.okHandler.bind(this);
		this.cancelHandler = this.cancelHandler.bind(this);
		this.state = {
			title: '',
			body: '',
		};

	}

	handleChange = (field) => (ev) => {
		this.setState({
			[field]: ev.currentTarget.value
		});
	};


	okHandler() {
		const {title, body} = this.state;
		const {id} = this.props;
		(this.props.isEdit) ?
			this.props.modifyTodoById({
				id: id,
				title: title,
				body: body
			}) :
			this.props.addTodo({
				title: title,
				body: body
			});

		this.props.hideForm();
	}

	cancelHandler() {
		this.setState({
			title: '',
			body: ''
		});
		this.props.hideForm();
	}

	setDefaultValues(props) {
		const {isEdit, todoList, id} = props;
		if (isEdit) {
			const {title, body} = todoList.reduce((res, todo) => {
				return (todo.id === id) ? todo : res;
			}, {title: '', body: ''});
			this.setState({
				title: title,
				body: body
			});
		}
	}

	componentWillMount() {
		this.setDefaultValues(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.setDefaultValues(nextProps);
	}

	render() {
		const header = (this.props.isEdit) ? <span> Edit todo </span> : <span> Add todo </span>;

		return (
			<div className="todo-form">
				<div className="todo-form__title">
					{header}
					<div className="todo-menu-form__control">
						<span onClick={this.okHandler}><img src={add} alt={'add'}/></span>
						<span onClick={this.cancelHandler}><img src={cancel} alt={'cancel'}/></span>
					</div>
				</div>

				<input type="text"
					   placeholder="Title"
					   className="todo-menu-form__title"
					   onChange={this.handleChange('title')}
					   value={this.state.title}
				/>
				<textarea
					placeholder="Body"
					className="todo-menu__body"
					onChange={this.handleChange('body')}
					value={this.state.body}
				/>
			</div>
		);
	}
}

Form.propTypes = {
	isEdit: PropTypes.bool,
	isAdd: PropTypes.bool,
	id: PropTypes.string,
	hideForm: PropTypes.func
};

export default connect((state) => {
	return {todoList: state.todos};
}, {addTodo, modifyTodoById})(Form);