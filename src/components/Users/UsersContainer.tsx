import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, setUsersCurrentPageAC, unFollowAC, UsersReducerType} from "../Redux/UsersReducer";
import {UsersAPIComponent} from "./UsersAPIComponent";

export type MapStateUsersType = {
    usersPage: UsersReducerType
    pageSize: number
    totalUsersCounter: number
    firstCount: number
}

type MapDispathUsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (user: Array<UsersType>) => void
    setCurrentUsers: (firstCount: number) => void
}

export type UsersPropsType = MapStateUsersType & MapDispathUsersType

const mapStateUsers = (state: AppStateType): MapStateUsersType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCounter: state.usersPage.totalUsersCounter,
        firstCount: state.usersPage.firstCount,
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
        },
        setCurrentUsers: (firstCount: number) => {
            dispatch(setUsersCurrentPageAC(firstCount))
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
    name: string
    status: string
    location: LocationType
    text: string
}

export const UsersContainer = connect(mapStateUsers,mapDispatchUsers)(UsersAPIComponent)

export default UsersContainer