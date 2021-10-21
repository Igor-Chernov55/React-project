import React from 'react';
import store, {addNewPost, AddPost, RootStateType} from "./components/StateComponents/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} addPropsCallback={AddPost} addNewPosts={addNewPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

