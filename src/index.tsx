import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store, {RootStateType} from "./components/Redux/State";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from 'react-redux';
import {storeRedux} from "./components/Redux/redux-store";

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={storeRedux}>
                <App sideBar={state.sideBar} profilePage={state.profilePage} headerTopMenu={state.headerTopMenu}
                     dialogsPage={state.dialogsPage} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree(store.getState())
// @ts-ignore
store.subscribe(() => {
    let state = store.getState();
    renderTree(state)
})

reportWebVitals();
