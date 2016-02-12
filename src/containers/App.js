import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, DevTools } from '../utils/devTools';

import FriendListApp from './FriendListApp';
// import * as reducers from '../reducers';
import friendlist from "../reducers/friendlist";

// const reducer = combineReducers(reducers);
// const store = createStore(reducer);
const store = createStore(friendlist);

export default class App extends Component {
  render() {
    return (
			<div>
				<Provider store={store}>
						<FriendListApp />
				</Provider>
				{/*<DevTools />*/}
			</div>
    );
  }
}
