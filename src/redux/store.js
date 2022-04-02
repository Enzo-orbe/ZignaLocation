import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import SearchDataReducer from "./reducers/SearchDataReducer";

export default function configureStore() {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancer(applyMiddleware(thunk));

  const store = createStore(SearchDataReducer, enhancer);

  return store;
}
