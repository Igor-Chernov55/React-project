import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, UsersReducerType} from "../Redux/UsersReducer";
import {UsersClass} from "./UsersClass";

type MapStateUsersType = {
    usersPage: UsersReducerType
}

type MapDispathUsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (user: Array<UsersType>) => void
}

export type UsersPropsType = MapStateUsersType & MapDispathUsersType

const mapStateUsers = (state: AppStateType): MapStateUsersType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchUsers = (dispatch: Dispatch): MapDispathUsersType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

type LocationType = {
    city: string
    country: string
}

type UsersType = {
    id: number
    followed: boolean
    userName: string
    status: string
    location: LocationType
    text: string
}

export const UsersContainer = connect(mapStateUsers,mapDispatchUsers)(UsersClass)

export default UsersContainer