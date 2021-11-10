import React, {Dispatch} from 'react'
import Dialogs from "../../../Dialogs/Dialogs";
import {DialogsType, MessageType} from "../../../StateComponents/State";
import {ActionsPostsReducerType, addPostAC, changePostAC} from "../../../StateComponents/PostsReducer";

type ProfileTypes = {
    newMessage: string
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    dispatch: Dispatch<ActionsPostsReducerType>
}

const ProfileContainer = (props: ProfileTypes) => {

    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onChange = (text: string) => {
        props.dispatch(changePostAC(text))
    }

    return (
        <Dialogs
            dialogs={props.dialogs}
            newMessage={props.newMessage}
            message={props.message}
            addPost={addPost}
            onChange={onChange}
        />
    )
}

export default ProfileContainer