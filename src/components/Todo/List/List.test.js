import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import {store} from '../../../store';
import {Provider} from 'react-redux';

it('List renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Provider store={store}><List setEdit={(id) => (ev) => {
	}} setAdd={() => {
	}}/></Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});