import React from 'react';
import store from "./components/StateComponents/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} dispatch={store.dispatch} addPropsCallback={store.AddPost} addNewPosts={store.addNewPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

