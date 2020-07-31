import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import App from './routers/App';

export default class Root extends Component {
	constructor(props) {
		super(props);
		const { persistor, store } = configureStore();
		this.persistor = persistor;
		this.store = store;
	}
	render() {
		return (
				<Provider store={this.store}>
					<App />
				</Provider>
		);
	}
}
