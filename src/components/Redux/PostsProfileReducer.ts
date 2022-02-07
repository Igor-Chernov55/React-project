import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../API/UserAPI";

export type MessageType = {
    id: number
    img: string
    message: string
}

export type PostsType = {
    id: number
    name: string
    img: string
    likes: number
}

type ContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

const initialState: PostProfileType = {
    newPostMessage: '',
    message: [],
    posts: [{id: 1, name: "post1", img: 'https://picsum.photos/200', likes: 1}],
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: null,
            large: null,
        }
        ,
    },
    status: {
        resultCode: 0,
        messages: [''],
        data: {}
    }
}

export type PostProfileType = {
    newPostMessage: string
    message: Array<MessageType>
    posts: Array<PostsType>
    profile: {
        userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string | null
        fullName: string | null
        contacts: ContactsType
        photos: {
            small: string | null
            large: string | null
        }
    }
    status: {
        resultCode: number
        messages: Array<string>
        data: {}
    }
}

export const postsProfileReducer = (state: PostProfileType = initialState, action: ActionsPostsReducerType): PostProfileType => {
    const stateCopy = {...state}
    switch (action.type) {
        case 'ADD-POST' :
            const newPost: PostsType = {
                id: new Date().getTime(),
                name: state.newPostMessage,
                img: 'https://avavatar.ru/images/avatars/1/avatar_jV2wd3K7Xo6YegC2.jpg',
                likes: 2,
            }

            stateCopy.posts.push(newPost)
            stateCopy.newPostMessage = ''
            return stateCopy

        case 'CHANGE-POST' :
            stateCopy.newPostMessage = action.post
            return stateCopy

        case "SET-USERS":
            return {...state, profile: action.profile}

        case 'SET-STATUS':
            return {...state, status: action.status}

        default:
            return stateCopy
    }
}

export type ActionsPostsReducerType =
    | ReturnType<typeof changePostAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setStatus>

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const changePostAC = (post: string) => {
    return {
        type: 'CHANGE-POST',
        post
    } as const
}

export const setUsers = (profile: any) => {
    return {
        type: 'SET-USERS',
        profile
    } as const
}

export const setStatus = (status: any) => {
    return {
        type: 'SET-STATUS',
        status
    }as const
}

export const getPostProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        console.log(response.data, "profile")
        dispatch(setUsers(response.data))
    })
}

export const getStatus = (status: any) => (dispatch: Dispatch) => {
    profileAPI.getStatus(status)
        .then(res => {
            dispatch(setStatus(res.data))
        })
}