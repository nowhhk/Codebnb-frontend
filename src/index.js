import Common from "./style/Common";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import Reset from "./style/Reset";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
// **** (1) createStore 와 루트 리듀서 불러오기
import { createStore } from "redux";
import rootReducer from "./store/modules";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Common}>
      <Reset />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
