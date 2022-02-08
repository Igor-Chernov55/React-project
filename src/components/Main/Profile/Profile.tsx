import React, {ChangeEvent, useEffect} from 'react'
import Post from './Posts/Posts'
import classes from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {addPostAC, getPostProfile, getStatus, PostProfileType, updateStatus} from "../../Redux/PostsProfileReducer";
import {useParams} from "react-router-dom";
import {AuthUsersType} from "../../Redux/AuthUsersReducer";
import {ProfileStatus} from "./ProfileStatus";

export const Profile: React.FC<any> = (props) => {

    const state = useSelector<AppStateType, PostProfileType>(state => state.profilePage)
    const stateIsAuth = useSelector<AppStateType, AuthUsersType>(state => state.authUser.isAuth)
    let id = useSelector<AppStateType>(state => state.authUser.id)
    const dispatch = useDispatch();
    const {users} = useParams<any>()

    useEffect(() => {
        dispatch(getPostProfile(users || id))
        dispatch(getStatus(users))
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

    return (
        <div>
            <div className={classes.infoBlock}>
            </div>
            <div>
                <ProfileStatus
                    status={state.status}
                    updateStatus={updateStatus}
                />
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

