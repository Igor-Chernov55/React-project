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
}

export type RootStateType = {
    dialogsPage: DialogsPageType
}


export const State: RootStateType = {
    dialogsPage: {
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

export const AddPost = (postText: string) => {
    const newPost: PostsType = {
        id: new Date().getTime(),
        name: postText,
        img: 'string',
        likes: 0,
        }

    State.dialogsPage.posts.push(newPost)
}