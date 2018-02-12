import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import {store} from '../../store';
import {Provider} from 'react-redux';

it('Todo renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Provider store={store}><Todo/></Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});