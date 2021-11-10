import React, {Dispatch} from 'react'
import {ActionType, PostsType} from "../../StateComponents/State";
import {addPostAC, changePostAC} from "../../StateComponents/PostsReducer";
import Profile from "./Profile";

type ProfileTypes = {
    message: string
    posts: Array<PostsType>
    dispatch: Dispatch<ActionType>
}

const ProfileContainer = (props: ProfileTypes) => {
    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onChange = (text: string) => {
        props.dispatch(changePostAC(text))
    }

    return (
        <Profile message={props.message}
                 posts={props.posts}
                 addPost={addPost}
                 onChange={onChange}
        />
    )
}

export default ProfileContainer