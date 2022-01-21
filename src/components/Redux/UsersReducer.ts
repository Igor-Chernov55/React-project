import {Dispatch} from "redux";
import {usersAPI} from "../API/UserAPI";

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
    name: string
    status: string
    location: LocationType
    photos: PhotosType
    text: string
}

export type UsersReducerType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCounter: number
    firstCount: number
    isLoader: boolean
    isFetching: Array<number>
}

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCounter: 100,
    firstCount: 1,
    isLoader: false,
    isFetching: []
}

export const usersReducer = (state: UsersReducerType = initialState, action: ActionType): UsersReducerType => {

    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map((u) => u.id === action.userId ? {...u, followed: true} : u)
            }
        }

        case 'UNFOLLOW' : {
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }
        }
        case 'SET_USERS': {
            return {
                ...state,
                users: [...action.users]
            }
        }

        case 'SET_USERS_CURRENT_PAGE': {
            return {
                ...state,
                firstCount: action.firstCount
            }
        }
        case "IS_LOADER": {
            return {
                ...state,
                isLoader: action.isLoader
            }
        }

        case 'FOLLOW-UN-PROGRESS': {
            return {
                ...state,
                isFetching: action.isFetching
                    ?
                    [...state.isFetching, action.userId]
                    :
                    state.isFetching.filter(user => user !== action.userId)
            }
        }
        default:
            return state
    }
}

type ActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setUsersCurrentPageAC>
    | ReturnType<typeof setIsLoaderAC>
    | ReturnType<typeof followInProgress>

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId

    } as const
}

export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId

    } as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}
export const setUsersCurrentPageAC = (firstCount: number) => {
    return {
        type: 'SET_USERS_CURRENT_PAGE',
        firstCount
    } as const
}
export const setIsLoaderAC = (isLoader: boolean) => {
    return {
        type: 'IS_LOADER',
        isLoader
    } as const
}
export const followInProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'FOLLOW-UN-PROGRESS',
        isFetching,
        userId
    } as const
}

export const getUsersTC = (pageNumber: number, pageSize: number) => {

    return (dispatch: Dispatch) => {
        dispatch(setIsLoaderAC(true))
        dispatch(setUsersCurrentPageAC(pageNumber))

        usersAPI.getUsers(pageNumber, pageSize)
            .then((data) => {
                dispatch(setUsersAC(data.items))
                dispatch(setIsLoaderAC(false))
            })
    }
}

export const followSucces = (userId: number) => {
    return (dispatch: Dispatch) => {

        usersAPI.follow(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
            })
    }
}

export const unFollowSucces = (userId: number) =>
    (dispatch: Dispatch) => {
        dispatch(followInProgress(true, userId))

        usersAPI.unFollow(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unFollowAC(userId))
            }
            dispatch(followInProgress(false, userId))
        })
    }
