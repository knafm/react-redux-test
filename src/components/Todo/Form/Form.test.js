import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import {store} from "../../../store";
import {Provider} from "react-redux";

it('Form renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Form/></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});