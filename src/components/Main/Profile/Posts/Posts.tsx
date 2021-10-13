import React from 'react'
import classes from './Posts.module.css'
import {PostsType} from "../../../StateComponents/State";

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
            <p>{props.name}</p>

            <div className={classes.postBlock}><img className={classes.imageAvatar}
                    src={props.img}/>
                <p>text post</p></div>
            <span>likes {props.likes}</span>
        </div>
    </>
)
}

export default Post