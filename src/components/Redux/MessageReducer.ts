import {ActionType, } from "./State";

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    img: string
    message: string
}

const initialState: InitialTypeDialogs = {
    dialogs: [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Sasha'},
    ],
    message: [
        {id: 1, img: 'src', message: 'text1'},
        {id: 2, img: 'src', message: 'text2'},
        {id: 3, img: 'src', message: 'text3'},
    ],
    newMessage: ''
}

export type InitialTypeDialogs = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessage: string
}


export const messageReducer = (state: InitialTypeDialogs = initialState, action: ActionsMessageReducerType): InitialTypeDialogs => {

    let stateCopy = {...state}

    switch (action.type) {
        case 'ADD-MESSAGE' :

            const newMessage: MessageType = {
                    id: new Date().getTime(),
                    img: 'https://avavatar.ru/image/4399',
                    message: stateCopy.newMessage
            }

            stateCopy.message.unshift(newMessage)
            stateCopy.newMessage = ''
            return stateCopy

        case 'CHANGE-MESSAGE' :

            stateCopy.newMessage = action.message

            return stateCopy

        default: return stateCopy
        }
    }


export type ActionsMessageReducerType =
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof changeMessageAC>


export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}

export const changeMessageAC = (message: string) => {
    return {
        type: 'CHANGE-MESSAGE', message
    } as const
}