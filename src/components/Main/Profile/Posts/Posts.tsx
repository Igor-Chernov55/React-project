import React from 'react'
import classes from './Posts.module.css'
import {PostsType} from "../../../Redux/State";

type PostType = {
    id: number
    name: string
    img: string
    likes: number
}

const Post = (props: PostsType) => {

    return (
    <>
        <div>
            <p>User</p>

            <div className={classes.postBlock}>
                <img className={classes.imageAvatar}
                    src={props.img}/>
                <p>{props.name}</p></div>
            <span>likes {props.likes}</span>
        </div>
    </>
)
}

export default Post