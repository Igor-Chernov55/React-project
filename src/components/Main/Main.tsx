import React from 'react'
import {PostsType} from '../StateComponents/State'
import classes from './Main.module.css'
import Profile from './Profile/Profile'

type MainPropsTypess = {
    posts: Array<PostsType>
    addPost: () => void
}

const Main: React.FC<MainPropsTypess> = (props) => {

    return (
        <main className={classes.container}>
         <Profile posts={props.posts}  addProps={props.addPost} />
        </main>
    )

}


export default Main