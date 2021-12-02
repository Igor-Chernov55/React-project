import {ActionsMessageReducerType} from "./MessageReducer";
import {ActionsPostsReducerType, postsProfileReducer} from "./PostsProfileReducer";

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    img: string
    message: string
}

export type HeaderType = {
    id: number
    name: string
}

export type PostsType = {
    id: number
    name: string
    img: string
    likes: number
}

export type siderMenuType = {
    id: number
    name: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    newMessage: string
}

export type ProfilePageType = {
    newPostMessage: string
    message: Array<MessageType>
    posts: Array<PostsType>
}

export type SideBarType = {
    siderMenu: Array<siderMenuType>
}

export type HeaderTopMenuType = {
    header: Array<HeaderType>
}

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
    headerTopMenu: HeaderTopMenuType
}

export type StoreType = {
    _State: RootStateType
    onChange: (cb: any) => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}

export type ActionType = ActionsPostsReducerType | ActionsMessageReducerType


export const store: StoreType = {
    _State: {
        dialogsPage: {
            newMessage: '',
            dialogs: [
                {id: 1, name: 'Pasha'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Sasha'},
            ],
        },
        profilePage: {
            newPostMessage: '',
            message: [
                {id: 1, img: 'src', message: 'text1'},
                {id: 2, img: 'src', message: 'text2'},
                {id: 3, img: 'src', message: 'text3'}
            ],
            posts: [
                {id: 1, name: "post1", img: 'https://picsum.photos/200', likes: 1},
            ]
        },
        sideBar: {
            siderMenu: [
                {id: 1, name: 'Profile'},
                {id: 2, name: 'Dialogs'},
                {id: 3, name: 'Users'},
                {id: 4, name: 'News'},
                {id: 5, name: 'Music'},
            ],
        },
        headerTopMenu: {
            header: [
                {id: 1, name: 'About us'},
                {id: 2, name: 'Contacts'},
                {id: 3, name: 'Map'}
            ],
        }

    },
    onChange() {
        console.log('state Changed ')
    },
    subscribe(callback: any) {
        this.onChange = callback
    },
    getState() {
        return this._State
    },
    dispatch(action: ActionType) {

       postsProfileReducer(this._State.profilePage, action)
        // messageReducer(this._State.dialogsPage, action)
        
        this.onChange(this._State)

    }
}

export default store
