import React from 'react'
import Dialogs from "../../../Dialogs/Dialogs";
import {Dispatch} from "react";
import {ActionsPostsReducerType, addPostAC, changePostAC} from "../../../StateComponents/PostsReducer";
import {DialogsType, MessageType} from "../../../StateComponents/State";

type PropsType = {
    dispatch: Dispatch<ActionsPostsReducerType>
    newMessage: string
    dialogs: DialogsType[]
    message: MessageType[]
}

const ProfileContainer = (props: PropsType) => {

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onChange = (text: string) => {
        props.dispatch(changePostAC(text))
    }


    return (
        <Dialogs
            newMessage={props.newMessage}
            dialogs={props.dialogs}
            message={props.message}
            addPost={addPost}
            onChange={onChange}
        />
    )
}

export default ProfileContainer