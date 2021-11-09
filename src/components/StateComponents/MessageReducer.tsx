import {ActionType, DialogsPageType, DialogsType} from "./State";


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
        type: 'CHANGE-MESSAGE', message:message
    } as const
}


export const messageReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE' :
            const newMessage: DialogsType = {
                    id: new Date().getTime(),
                    name: state.newMessage
            }

                    state.dialogs.push(newMessage)
                return state

        case 'CHANGE-MESSAGE' :

            state.newMessage = action.message

            return state

        default: return state
        }
    }


// if (action.type === 'CHANGE-MESSAGE') {
//     this._State.dialogsPage.newMessage = action.message
//     this.onChange(this._State)
// } else if (action.type === 'ADD-MESSAGE') {
//     const newMessage: MessageType = {
//         id: new Date().getTime(),
//         img: '',
//         message: this._State.dialogsPage.newMessage
//     }
//
//     this._State.dialogsPage.message.push(newMessage)
//     this.onChange(this._State)
// }