import React from 'react'
import {AddPost, PostsType} from '../StateComponents/State'
import classes from './Main.module.css'
import Profile from './Profile/Profile'

type MainPropsType = {
    posts: Array<PostsType>
    addPropsCallback:(postText: string) => void
}

const Main: React.FC<MainPropsType> = (props) => {

    return (
        <main className={classes.container}>
         <Profile posts={props.posts}  addPropsCallback={props.addPropsCallback}/>
        </main>
    )
}


export default Main