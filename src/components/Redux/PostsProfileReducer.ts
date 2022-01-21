import {Dispatch} from "redux";
import {usersAPI} from "../API/UserAPI";

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
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

const initialState: PostProfileType = {
    newPostMessage: '',
    message: [],
    posts: [{id: 1, name: "post1", img: 'https://picsum.photos/200', likes: 1}],
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        }
        ,
    }
}

export type PostProfileType = {
    newPostMessage: string
    message: Array<MessageType>
    posts: Array<PostsType>
    profile: {
        userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: ContactsType
        photos: {
            small: string
            large: string
        }
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
        default:
            return stateCopy
    }
}

export type ActionsPostsReducerType =
    | ReturnType<typeof changePostAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUsers>


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

export const getPostProfile = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setUsers(userId))
    usersAPI.getProfile(userId).then((response) => {
        console.log(response.data, "profile")
        dispatch(setUsers(response.data))
    })
}
