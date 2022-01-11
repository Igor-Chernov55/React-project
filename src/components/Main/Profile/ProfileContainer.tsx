import React from 'react'
import {addPostAC, changePostAC,} from "../../Redux/PostsProfileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {Profile} from "./Profile";

// type MapStateProfileType = {
//     profilePage: InitialStateType
// }
//
// type MapDispatchProfile = {
//     addPost : () => void
//     onChangePost: (text: string) => void
// }
//
// export type ProfileTypes = MapStateProfileType & MapDispatchProfile
//
//
// const mapStateProfile = (state : AppStateType): MapStateProfileType  => {
//     return {
//         profilePage: state.profilePage
//     }
// }
// const mapDispatchProfile = (dispath: Dispatch): MapDispatchProfile => {
//     return {
//         addPost : () => {
//             dispath(addPostAC())
//         },
//
//         onChangePost: (text: string) => {
//             dispath(changePostAC(text))
//         },
//
//     }
// }
//
// export const ProfileContainer = connect(mapStateProfile,mapDispatchProfile) (Profile)
//
// export default ProfileContainer