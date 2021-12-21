import React, {ChangeEvent, useEffect} from 'react'
import Post from './Posts/Posts'
import classes from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {addPostAC, PostProfileType} from "../../Redux/PostsProfileReducer";


export const Profile = (props: any) => {

    const state = useSelector<AppStateType, PostProfileType>(state => state.profilePage)
    const dispatch = useDispatch();
    useEffect(()=>{

    }, [])
    const addPost = () => {
        dispatch(addPostAC())
        localStorage.setItem('value', props.profilePage.newPostMessage)
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangePost(e.currentTarget.value)

    }

    return (
        <>
            <div className={classes.infoBlock}>
                <div>Avatar</div>
            </div>

            <div>
                My posts
                <div>
                    <textarea value={state.newPostMessage} onChange={onChange} name="textPost"/>
                    <button onClick={addPost}>опубликовать</button>
                </div>
                {state.posts.map(p => <Post key={p.id} id={p.id} name={p.name} img={p.img} likes={p.likes}/>)}
            </div>
        </>
    )
}

