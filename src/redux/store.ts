import {
  combineReducers,
  compose,
  legacy_createStore
} from "redux";

import userValueReducer from "./userValueReducer";
import listReducer from "./listReducer";
import searchReducer from "./searchReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      userValueReducer: userValueReducer,
      listReducer: listReducer,
      searchReducer: searchReducer,
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore;
