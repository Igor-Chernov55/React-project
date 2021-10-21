import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Sider from './components/Sider/Sider';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {Route, Switch} from 'react-router-dom';
import Dialogs from "./components/Dialogs/Dialogs";
import {StoreType} from "./components/StateComponents/State";

type RootStatesType = {
    store: StoreType
    addPropsCallback: (postText: string) => void
    addNewPosts: (NewText: string) => void
}

function App(props: RootStatesType ) {
        const state = props.store.getState()
    return (
        <Switch>
            <div className={classes.Main}>
                <div className={classes.Container}>
                    <Header header={props.state.dialogsPage.header}/>
                    <div className={classes.ContentBlock}>
                        <Sider siderMenu={props.state.dialogsPage.siderMenu}/>

                        <Route exact path={['/', '/profile']} render={() => <Main addNewPost={props.addNewPosts} addPost={props.addPropsCallback} message={props.state.dialogsPage.newPostMessage} posts={props.state.dialogsPage.posts} />}/>
                        <Route exact path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} message={props.state.dialogsPage.message}/>}/>

                    </div>
                    <Footer/>
                </div>
            </div>
        </Switch>

    );
}

export default App;
