import React from 'react'
import Post from './Posts/Posts'
import classes from './Profile.module.css'
import {PostsType} from "../../StateComponents/State";

type ProfileTypes = {
    posts: Array<PostsType>
    addProps:(postText: string) => void
}

const Profile = (props: ProfileTypes) => {

    let NewPost = React.createRef<HTMLTextAreaElement>()

    const AddPost = () => {
        if (NewPost.current) {
            props.addProps(NewPost.current.value)
        }
    }

    return (
        <>
            <div className={classes.infoBlock}>
                <div>Avatar</div>
            </div>

            <div>
                My posts
                <div><textarea ref={NewPost} name="textPost" id="" ></textarea><button onClick={AddPost}>опубликовать</button></div>
                {props.posts.map( p => <Post id={p.id} name={p.name} img={p.img} likes={p.likes} />)}
            </div>
        </>
    )
}

export default Profile
