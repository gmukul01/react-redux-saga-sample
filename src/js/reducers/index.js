import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import catalogues from "reducers/catalouges";

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(combineReducers({ catalogues }), composeWithDevTools(applyMiddleware(sagaMiddleware)));
