import React from 'react'
import {addPostAC, changePostAC, InitialStateType} from "../../StateComponents/PostsProfileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../StateComponents/redux-store";
import {Dispatch} from "redux";
import {Profile} from "./Profile";

type MapStateProfileType = {
    profilePage: InitialStateType
}

type MapDispathProfile = {
    addPost : () => void
    onChangePost: (text: string) => void
}

export type ProfileTypes = MapStateProfileType & MapDispathProfile


const mapStateProfile = (state : AppStateType): MapStateProfileType  => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispathProfile = (dispath: Dispatch): MapDispathProfile => {
    return {
        addPost : () => {
            dispath(addPostAC())
        },

        onChangePost: (text: string) => {
            dispath(changePostAC(text))
        },

    }
}

export const ProfileContainer = connect(mapStateProfile,mapDispathProfile) (Profile)

export default ProfileContainer