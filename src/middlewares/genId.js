import Guid from '../utils/guidNotForProd';

export default () => (next) => (action) => {
	if (action.type === 'addTodo') {
		const uuid = Guid.newGuid();
		next({
			payload: {
				...action.payload,
				id: uuid
			},
			type: 'addTodo'
		});
	} else {
		next(action);
	}
}