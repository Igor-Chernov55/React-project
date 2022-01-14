import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {
    followAC, followInProgress,
    setIsLoaderAC,
    setUsersAC,
    setUsersCurrentPageAC,
    unFollowAC,
    UsersReducerType
} from "../Redux/UsersReducer";

import {UsersAPIComponent} from "./UsersAPIComponent";

export type MapStateUsersType = {
    usersPage: UsersReducerType
    pageSize: number
    totalUsersCounter: number
    firstCount: number
    Loader: boolean
    isFetching: Array<number>
}

type MapDispatchUsersType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (user: Array<UsersType>) => void
    setCurrentUsers: (firstCount: number) => void
    isLoader: (loader: boolean) => void
    followInProgress: (value: boolean, isFetching: number) => void
}

export type UsersPropsType = MapStateUsersType & MapDispatchUsersType

const mapStateUsers = (state: AppStateType): MapStateUsersType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCounter: state.usersPage.totalUsersCounter,
        firstCount: state.usersPage.firstCount,
        Loader: state.usersPage.isLoader,
        isFetching: state.usersPage.isFetching
    }
}

type LocationType = {
    city: string
    country: string
}

type PhotosType = {
    large: string
    small: string
}

type UsersType = {
    id: number
    followed: boolean
    photos: PhotosType
    name: string
    status: string
    location: LocationType
    text: string
}

export const UsersContainer = connect(mapStateUsers, {
    follow: followAC,
    unfollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentUsers: setUsersCurrentPageAC,
    isLoader: setIsLoaderAC,
    followInProgress: followInProgress,
})(UsersAPIComponent)

export default UsersContainer