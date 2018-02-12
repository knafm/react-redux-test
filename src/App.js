import React, {Component} from 'react';
import Todo from './components/Todo/Todo';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './store/index';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Todo/>
				</div>
			</Provider>
		);
	}
}

export default App;
