import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

it('Item renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Item handleEdit={() => {
	}} handleDelete={() => {
	}} handleFinished={() => {
	}}/>, div);
	ReactDOM.unmountComponentAtNode(div);
});