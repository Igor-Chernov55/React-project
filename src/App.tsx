import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Sider from './components/Sider/Sider';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {Route, Switch} from 'react-router-dom';
import Dialogs from "./components/Dialogs/Dialogs";
import {RootStateType} from "./components/StateComponents/State";

type RootStatesType = {
    state: RootStateType
    addPropsCallback: (postText: string) => void
}

function App(props: RootStatesType ) {
    let NewPost = React.createRef<HTMLTextAreaElement>()

    const AddPost = () => {
        if (NewPost.current) {
            props.addPropsCallback(NewPost.current.value)
        }
    }
    return (
        <Switch>
            <div className={classes.Main}>
                <div className={classes.Container}>
                    <Header header={props.state.dialogsPage.header}/>
                    <div className={classes.ContentBlock}>
                        <Sider siderMenu={props.state.dialogsPage.siderMenu}/>

                        <Route exact path={['/', '/profile']} render={() => <Main addPost={AddPost} posts={props.state.dialogsPage.posts} />}/>
                        <Route exact path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs} message={props.state.dialogsPage.message}/>}/>

                    </div>
                    <Footer/>
                </div>
            </div>
        </Switch>

    );
}

export default App;
