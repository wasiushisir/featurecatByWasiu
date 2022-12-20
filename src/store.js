import { createStore,applyMiddleware } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'



import carauselReducer from "./reducers/carauselReducer";

const store= createStore(carauselReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store;


// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()