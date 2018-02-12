export function addTodo(data) {
	const {title, body} = data;
	return {
		type: 'addTodo',
		payload: {
			title: title,
			body: body,
		}
	};
}

export function deleteTodoById(id) {
	return {
		type: 'deleteTodoById',
		payload: {
			id: id,
		}
	};
}

export function finishTodoById(id) {
	return {
		type: 'finishTodoById',
		payload: {
			id: id,
		}
	};
}

export function modifyTodoById(data) {
	const {id, title, body} = data;
	return {
		type: 'modifyTodoById',
		payload: {
			id: id,
			title: title,
			body: body
		}
	};
}