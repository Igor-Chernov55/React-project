import {ActionType, PostsType, ProfilePageType} from "./State";

export type ActionsPostsReducerType =
    | ReturnType<typeof changePostAC>
    | ReturnType<typeof addPostAC>


export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    }as const
}

export const changePostAC = (post: string) => {
    return {
        type: 'CHANGE-POST',
        post
    }as const
}

export const postsReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST' :
            const newPost: PostsType = {
                id: new Date().getTime(),
                name: state.newPostMessage,
                img: 'https://avavatar.ru/images/avatars/1/avatar_jV2wd3K7Xo6YegC2.jpg',
                likes: 2,
            }

            state.posts.push(newPost)

            return state


        case 'CHANGE-POST' :
            state.newPostMessage = action.post
            return state

        default: return state
    }
}

// else if (action.type === 'CHANGE-POST') {
//     this._State.dialogsPage.newPostMessage = action.post
//     this.onChange(this._State)
// }
//
// else if (action.type === 'ADD-POST') {
//     const newPost: PostsType = {
//         id: new Date().getTime(),
//         img: 'https://avavatar.ru/images/avatars/1/avatar_jV2wd3K7Xo6YegC2.jpg',
//         name: this._State.dialogsPage.newPostMessage,
//         likes: 2
//     }
//
//     this._State.dialogsPage.posts.push(newPost)
//     this.onChange(this._State)
// }