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
    message: Array<MessageType>
    header: Array<HeaderType>
    siderMenu: Array<siderMenuType>
    posts: Array<PostsType>
    newPostMessage: string
}

export type RootStateType = {
    dialogsPage: DialogsPageType
}


export const State: RootStateType = {


    dialogsPage: {
        newPostMessage: 'some',
        dialogs: [
            {id: 1, name: 'Pasha'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Sasha'},
        ],

        message: [
            {id: 1, img: 'src', message: 'text1'},
            {id: 2, img: 'src', message: 'text2'},
            {id: 3, img: 'src', message: 'text3'}
        ],

        header: [
            {id: 1, name: 'About us'},
            {id: 2, name: 'Contacts'},
            {id: 3, name: 'Map'}
        ],

        siderMenu: [
            {id: 1, name: 'Profile'},
            {id: 2, name: 'Dialogs'},
            {id: 3, name: 'Message'},
            {id: 4, name: 'News'},
            {id: 5, name: 'Music'},
        ],
        posts: [
            {id: 1, name: "post1", img: 'https://picsum.photos/200', likes: 1},
        ]
    }

}

export type StoreType = {
    _State: RootStateType
    addNewPost: (newText: string) => void
    AddPost: (postText: string) => void
    onChange: () => void
    subscribe:(callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}

type ChangeNewTextActionType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}

export type ActionType = AddPostActionType | ChangeNewTextActionType

export const addPostAC = (postText: string):AddPostActionType  => {
  return {
      type: "ADD-POST",
      postText: postText
  }
}

export const ChangePostAC = (newText: string):ChangeNewTextActionType  => {
  return {
      type: "CHANGE-NEW-TEXT",
      newText: newText
  }
}




const store: StoreType = {
    _State: {

        dialogsPage: {
            newPostMessage: 'some',
            dialogs: [
                {id: 1, name: 'Pasha'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Sasha'},
            ],

            message: [
                {id: 1, img: 'src', message: 'text1'},
                {id: 2, img: 'src', message: 'text2'},
                {id: 3, img: 'src', message: 'text3'}
            ],

            header: [
                {id: 1, name: 'About us'},
                {id: 2, name: 'Contacts'},
                {id: 3, name: 'Map'}
            ],

            siderMenu: [
                {id: 1, name: 'Profile'},
                {id: 2, name: 'Dialogs'},
                {id: 3, name: 'Message'},
                {id: 4, name: 'News'},
                {id: 5, name: 'Music'},
            ],
            posts: [
                {id: 1, name: "post1", img: 'https://picsum.photos/200', likes: 1},
            ]
        }

    },
    addNewPost(newText: string) {
        this._State.dialogsPage.newPostMessage = newText
        this.onChange()
    },
    AddPost(postText: string) {
        const newPost: PostsType = {
            id: new Date().getTime(),
            name: postText,
            img: 'string',
            likes: 0,
        }

        this._State.dialogsPage.posts.push(newPost)
        this.onChange()
    },
    onChange() {
        console.log('state Changed ')
    },
    subscribe(callback: () => void){
        this.onChange = callback
    },
    getState() {
        return this._State
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: new Date().getTime(),
                name: action.postText,
                img: 'string',
                likes: 0,
            }
            this._State.dialogsPage.posts.push(newPost)
            this.onChange()
        }
        else if (action.type === 'CHANGE-NEW-TEXT') {
            this._State.dialogsPage.newPostMessage = action.newText
            this.onChange()
        }
    }
}

export default store