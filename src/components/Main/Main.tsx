import React from 'react'
import {PostsType} from '../StateComponents/State'
import classes from './Main.module.css'
import Profile from './Profile/Profile'

type MainPropsTypess = {
    message: string
    posts: Array<PostsType>
    addPost: (postText: string) => void
    addNewPost: (newText: string) => void
}

const Main: React.FC<MainPropsTypess> = (props) => {

    return (
        <main className={classes.container}>
         <Profile posts={props.posts} message={props.message} newPostMessage={props.addNewPost} addProps={props.addPost} />
        </main>
    )

}


export default Main