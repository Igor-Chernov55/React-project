import React, {ChangeEvent, useEffect} from 'react'
import Post from './Posts/Posts'
import classes from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {addPostAC, getPostProfile, PostProfileType} from "../../Redux/PostsProfileReducer";
import {Redirect, useParams} from "react-router-dom";
import {AuthUsersType} from "../../Redux/AuthUsersReducer";
import {authComponentHOC} from "../../HOC/AuthComponentHOC";
import {ProfileStatus} from "./ProfileStatus";

export const Profile: React.FC<any> = (props) => {

    const state = useSelector<AppStateType, PostProfileType>(state => state.profilePage)
    const stateIsAuth = useSelector<AppStateType, AuthUsersType>(state => state.authUser.isAuth)
    const id = useSelector<AppStateType>(state => state.authUser.id)
    const dispatch = useDispatch();

    const {users} = useParams<any>()

    useEffect(() => {
        dispatch(getPostProfile(users || id))
    }, [users])

    const addPost = () => {
        dispatch(addPostAC())
        localStorage.setItem('value', props.profilePage.newPostMessage)
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangePost(e.currentTarget.value)
    }

    if (!state.profile) {
        return <div>...loading</div>
    }

    //authComponentHOC(Profile)

    //if (!stateIsAuth) return <Redirect to={'/login'} />
    console.log(state)
    return (
        <div>
            <div className={classes.infoBlock}>

                {/*<div>{state.profile.fullName && state.profile.fullName}</div>*/}
                {/*<img src={state.profile.photos && state.profile.photos.large ? state.profile.photos.large : ''} alt="avatar"/>*/}
                {/*<div>{state.profile.photos.large}</div>*/}
            </div>

            <div>
                <ProfileStatus status={'hello status'}/>
                <div>{state.profile?.fullName ? state.profile?.fullName : ''}</div>
                <div>
                    <textarea value={state.newPostMessage} onChange={onChange} name="textPost"/>
                    <button onClick={addPost}>опубликовать</button>
                </div>
                {state.posts.map(p => <Post key={p.id} id={p.id} name={p.name} img={p.img} likes={p.likes}/>)}
            </div>
        </div>
    )
}

