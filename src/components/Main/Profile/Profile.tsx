import React, {ChangeEvent} from 'react'
import Post from './Posts/Posts'
import classes from './Profile.module.css'
import {ProfileTypes} from "./ProfileContainer";


export const Profile = (props: ProfileTypes) => {

    const addPost = () => {
        props.addPost()

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
                    <textarea value={props.profilePage.newPostMessage} onChange={onChange} name="textPost"/>
                    <button onClick={addPost}>опубликовать</button>
                </div>
                {props.profilePage.posts.map(p => <Post key={p.id} id={p.id} name={p.name} img={p.img} likes={p.likes}/>)}
            </div>
        </>
    )
}

