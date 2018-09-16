import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore , applyMiddleware,combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots,requestRobots} from './reducers'
import 'tachyons';

const logger =createLogger();
const rootReducers=combineReducers({searchRobots,requestRobots} )
const store = createStore(rootReducers , composeWithDevTools( applyMiddleware(thunkMiddleware)));
ReactDOM.render(
		<Provider store={store}> 
		<App />
		</Provider>
		, document.getElementById('root'));

registerServiceWorker(); 
