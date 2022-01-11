import React from 'react'
import Dialogs from "./Dialogs";
import {AppStateType} from "../Redux/redux-store";
import {addMessageAC, changeMessageAC, InitialTypeDialogs} from "../Redux/MessageReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateDialogsType = {
    dialogsPage: InitialTypeDialogs
}

type MapDispatchDialogsType = {
    addMessage: () => void
    onChangeMessage: (message: string) => void
}

export type DialogsPropsType = MapStateDialogsType & MapDispatchDialogsType

const mapStateDialogs = (state: AppStateType): MapStateDialogsType  => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispathDialogs = (dispath: Dispatch): MapDispatchDialogsType  => {
    return {
        addMessage: () => {
            dispath(addMessageAC())
        },
        onChangeMessage: (message: string) => {
            dispath(changeMessageAC(message))
        }
    }
}

export const DialogsContainer = connect(mapStateDialogs,mapDispathDialogs) (Dialogs)

export default DialogsContainer