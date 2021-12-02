import React, {Dispatch} from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Sider from './components/Sider/Sider';
import Footer from './components/Footer/Footer';
import {Route, Switch} from 'react-router-dom';
import {
    ActionType,
    DialogsPageType,
    HeaderTopMenuType,
    ProfilePageType,
    SideBarType
} from "./components/Redux/State";


import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Main/Profile/ProfileContainer";
import Users from "./components/Users/Users";

type RootStatesType = {
    dialogsPage: DialogsPageType
    dispatch: Dispatch<ActionType>
    profilePage: ProfilePageType
    sideBar: SideBarType
    headerTopMenu: HeaderTopMenuType
}

function App(props: RootStatesType) {
    return (
        <Switch>
            <div className={classes.Main}>
                <div className={classes.Container}>
                    <Header header={props.headerTopMenu.header}/>
                    <div className={classes.ContentBlock}>
                        <Sider siderMenu={props.sideBar.siderMenu}/>

                        <Route exact path={['/', '/profile']} render={() => {
                            return (
                                <ProfileContainer />
                            )
                        }}/>
                        <Route exact path='/dialogs' render={() => {
                            return (
                                <DialogsContainer />
                            )
                        }}/>
                        <Route exact path='/users' render = {() => {
                            return (
                                <Users />
                            )
                        }} />
                    </div>
                    <Footer/>
                </div>
            </div>
        </Switch>

    );
}

export default App;
