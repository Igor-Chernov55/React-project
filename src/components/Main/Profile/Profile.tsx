import React, {ChangeEvent} from 'react'
import Post from './Posts/Posts'
import classes from './Profile.module.css'
import {PostsType} from "../../StateComponents/State";

type ProfileTypes = {
    message: string
    posts: Array<PostsType>
    addPost: () => void
    onChange: (text: string) => void
}

const Profile = (props: ProfileTypes) => {

    const addPost = () => {
        props.addPost()
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(e.currentTarget.value)
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