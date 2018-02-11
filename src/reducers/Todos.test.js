import {store} from '../store/index';
import {addTodo} from '../ac/todo';

describe('Reducer/ actions ...', () => {
    test('add todo id generated after dispatch & valid', (done) => {

        store.dispatch(addTodo({
            title: 'test',
            body: 'test'
        }));
        expect.assertions(1);
        return new Promise((resolve => {
            store.replaceReducer((testData, action) => {
                if (action.type === "addTodo") {
                    expect(/[a-f0-9]{8}-?[a-f0-9]{4}-?[1-5][a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/
                        .test(action.payload.id)).toBe(true);
                    resolve()
                }
            });
        })).then(() => {
            done()
        })

    })
});
