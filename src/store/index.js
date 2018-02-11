import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from "../reducers/index";
import api from "../middlewares/api";
import {supportsLocalStorage} from "../lib/localStorageCheck";

const middlewares = applyMiddleware(api);
export const store = createStore(rootReducer, middlewares);

if (supportsLocalStorage()) {
    store.subscribe(() => {
        localStorage.setItem("todoStorage", JSON.stringify(store.getState().todos))
    });
}