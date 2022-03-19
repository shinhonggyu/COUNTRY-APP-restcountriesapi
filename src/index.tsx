import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
