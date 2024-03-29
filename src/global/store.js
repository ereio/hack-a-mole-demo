import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from 'domain';

// react router navigation history 
import { routerReducer, routerMiddleware } from 'react-router-redux'; 

import createHistory from 'history/createBrowserHistory';

// redux reducers 
const rootReducer = combineReducers({...reducers, router: routerReducer})

// middleware for async and browser history
const history = createHistory();
const middleware = [thunk, routerMiddleware(history)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeEnhancers(applyMiddleware(...middleware));

// store init
const store = createStore(rootReducer, composedEnhancers);

export { store, history }; 