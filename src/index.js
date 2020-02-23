import React from "react";
import createSagaMiddleware from "redux-saga";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers";
import App from "./components/App";
import rootSaga from "./sagas/saga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
if (module.hot) {
  module.hot.accept(App);
}
