import React, {ChangeEvent} from 'react'
import Post from './Posts/Posts'
import classes from './Profile.module.css'
import {PostsType} from "../../StateComponents/State";

type ProfileTypes = {
    message: string
    posts: Array<PostsType>
    addProps:(postText: string) => void
    newPostMessage: (newText: string) => void
}

const Profile = (props: ProfileTypes) => {

    let NewPost = React.createRef<HTMLTextAreaElement>()

    const AddPost = () => {
        props.addProps(props.message)
    }

    const newPostMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.newPostMessage(e.currentTarget.value)
    }



    return (
        <>
            <div className={classes.infoBlock}>
                <div>Avatar</div>
            </div>

            <div>
                My posts
                <div><textarea ref={NewPost} onChange={newPostMessage} name="textPost" /><button onClick={AddPost}>опубликовать</button></div>
                {props.posts.map( p => <Post key={p.id} id={p.id} name={p.name} img={p.img} likes={p.likes} />)}
            </div>
        </>
    )
}

export default Profile
