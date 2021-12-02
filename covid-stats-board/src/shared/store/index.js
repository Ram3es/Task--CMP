import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

import rootReducer from "./rootReducer";

window.devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
export const history = createBrowserHistory();

export const configureStore = (history) =>{
const store = createStore(
  rootReducer(history),
  
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ) 
);
return {store}
  }

