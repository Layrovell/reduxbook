import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {routes} from './routes/routes';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store/index";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                {routes}
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
