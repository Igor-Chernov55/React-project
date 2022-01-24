import React from 'react';
import classes from './App.module.css';
import Sider from './components/Sider/Sider';
import Footer from './components/Footer/Footer';
import {Redirect, Route, Switch} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Profile} from "./components/Main/Profile/Profile";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login";

function App() {

    return (
            <div className={classes.Main}>
                <div className={classes.Container}>
                    <HeaderContainer />
                    <div className={classes.ContentBlock}>
                        <Sider />
                        <Switch>
                        <Route path='/profile/:users?' render={() => <Profile />}/>
                        <Route path='/dialogs' render={() => <DialogsContainer />}/>
                        <Route path='/users' render = {() => <UsersContainer />} />
                        <Route path='/login' render={() => <Login />} />

                            <Redirect from={'/'} to={'/profile'}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </div>

    );
}

export default App;
