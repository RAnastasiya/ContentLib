import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import store from "./createStore";
import App from "./components1/App.js";


render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById("root")
);