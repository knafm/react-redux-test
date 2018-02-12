import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from '../reducers/index';
import api from '../middlewares/genId';
import {supportsLocalStorage} from '../utils/localStorageCheck';
import throttle from 'lodash/throttle';

const middlewares = applyMiddleware(api);
export const store = createStore(rootReducer, middlewares);

if (supportsLocalStorage()) {
	store.subscribe(throttle(() => {
		localStorage.setItem('todoStorage', JSON.stringify(store.getState().todos));
	}), 1000);
}