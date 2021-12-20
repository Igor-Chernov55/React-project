import {ActionType} from "./State";

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


const initialState: InitialStateType = {
    newPostMessage: '',
    message: [],
    posts: [{id: 1, name: "post1", img: 'https://picsum.photos/200', likes: 1}],
}

export type InitialStateType = {
    newPostMessage: string
    message: Array<MessageType>
    posts: Array<PostsType>
}

export const postsProfileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

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
            // @ts-ignore
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
    }as const
}

