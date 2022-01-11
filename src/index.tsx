import React from 'react';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from 'react-redux';
import {storeRedux} from "./components/Redux/redux-store";
import ReactDOM from 'react-dom';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={storeRedux}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);



