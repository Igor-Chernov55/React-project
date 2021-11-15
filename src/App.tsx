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
} from "./components/StateComponents/State";


import DialogsContainer from "./components/Main/Profile/Posts/DialogsContainer";
import ProfileContainer from "./components/Main/Profile/ProfileContainer";

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
                    </div>
                    <Footer/>
                </div>
            </div>
        </Switch>

    );
}

export default App;
