import React, {Dispatch} from 'react'
import {ActionType, PostsType} from '../StateComponents/State'
import classes from './Main.module.css'
import ProfileContainer from "./Profile/ProfileContainer";

type MainPropsTypess = {
    message: string
    posts: Array<PostsType>
    dispatch: Dispatch<ActionType>
}

const Main: React.FC<MainPropsTypess> = (props: MainPropsTypess) => {

    return (
        <main className={classes.container}>
            <ProfileContainer
                posts={props.posts}
                message={props.message}
                dispatch={props.dispatch}
            />
        </main>
    )
}

export default Main