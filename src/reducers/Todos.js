import testData from '../fixtures/testData';
import {supportsLocalStorage} from '../utils/localStorageCheck';

// Проверка на наличие localStorage , данных в нем , если нет ничего - то тестовые данные
const initState = (supportsLocalStorage() && localStorage.hasOwnProperty('todoStorage')) ?
	JSON.parse(localStorage.getItem('todoStorage')) || [] : testData;

export default function todos(state = initState, action) {
	const {type, payload} = action;
	switch (type) {
		case 'addTodo': {
			return [...state, {
				// id из middleware genId
				'id': payload.id,
				'title': payload.title,
				'body': payload.body,
				'isFinished': false
			}];
		}

		case 'deleteTodoById': {
			return state.filter((todo) => {
				return todo.id !== payload.id;
			});
		}

		case 'finishTodoById': {
			return state.map((item) => {
				return (item.id === payload.id) ? {...item, isFinished: !item.isFinished} : item;
			});
		}

		case 'modifyTodoById': {
			return state.map((item) => {
				return (item.id === payload.id) ? {...item, title: payload.title, body: payload.body} : item;
			});
		}

		default:
			return state;
	}

}