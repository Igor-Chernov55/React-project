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
    dialogs: [],
    message: [],
    newMessage: ''
}

export type InitialTypeDialogs = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessage: string
}


export const messageReducer = (state: InitialTypeDialogs = initialState, action: ActionType): InitialTypeDialogs => {

    let stateCopy = {...state}

    switch (action.type) {
        case 'ADD-MESSAGE' :


            const newMessage: DialogsType = {
                    id: new Date().getTime(),
                    name: stateCopy.newMessage
            }

            stateCopy.dialogs.push(newMessage)
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