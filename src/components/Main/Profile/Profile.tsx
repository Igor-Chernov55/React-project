import React, {ChangeEvent, Dispatch} from 'react'
import Post from './Posts/Posts'
import classes from './Profile.module.css'
import {ActionType, PostsType} from "../../StateComponents/State";
import {ActionsPostsReducerType, addPostAC, changePostAC} from "../../StateComponents/PostsReducer";

type ProfileTypes = {
    message: string
    posts: Array<PostsType>
    dispatch: Dispatch<ActionType>
}

const Profile = (props: ProfileTypes) => {
    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changePostAC(e.currentTarget.value))
    }

    return (
        <>
            <div className={classes.infoBlock}>
                <div>Avatar</div>
            </div>

            <div>
                My posts
                <div>
                    <textarea value={props.message} onChange={onChange} name="textPost"/>
                    <button onClick={addPost}>опубликовать</button>
                </div>
                {props.posts.map(p => <Post key={p.id} id={p.id} name={p.name} img={p.img} likes={p.likes}/>)}
            </div>
        </>
    )
}

export default Profile