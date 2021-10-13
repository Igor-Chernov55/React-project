import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Sider from './components/Sider/Sider';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {Route, Switch} from 'react-router-dom';
import Dialogs from "./components/Dialogs/Dialogs";
import {AddPost, RootStateType} from "./components/StateComponents/State";

type RootStatesType = {
    state: RootStateType

}

function App(props: RootStatesType ) {
    return (
        <Switch>
            <div className={classes.Main}>
                <div className={classes.Container}>
                    <Header header={props.state.dialogsPage.header}/>
                    <div className={classes.ContentBlock}>
                        <Sider siderMenu={props.state.dialogsPage.siderMenu}/>

                        <Route exact path={['/', '/profile']} render={() => <Main posts={props.state.dialogsPage.posts} addPropsCallback={AddPost}/>}/>
                        <Route exact path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} message={props.state.dialogsPage.message}/>}/>

                    </div>
                    <Footer/>
                </div>
            </div>
        </Switch>

    );
}

export default App;
