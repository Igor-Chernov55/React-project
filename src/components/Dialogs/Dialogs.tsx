import React, {ChangeEvent, Dispatch} from 'react'
import classes from './Dialogs.module.css'
import { DialogsType, MessageType} from "../StateComponents/State";
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from "./DialogsMessage/Message";
import {ActionsMessageReducerType, addMessageAC, changeMessageAC} from "../StateComponents/MessageReducer";

type DialogsPageTypes = {
    newMessage: string
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    dispatch: Dispatch<ActionsMessageReducerType>
}

const Dialogs: React.FC<DialogsPageTypes> = (props: DialogsPageTypes) => {
    const addPost = () => {
        props.dispatch(addMessageAC());
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeMessageAC(e.currentTarget.value));
    }

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogsBlock}>
                <ul className={classes.dialogsItem}>
                    {props.dialogs.map(d => <DialogsItem key={d.id} id={d.id} name={d.name}/>)}

                </ul>
                <div className={classes.dialogsMessage}>
                    <div>
                        {props.message.map(m => <Message key={m.id} id={m.id} img={m.img} message={m.message}/>)}
                        <textarea value={props.newMessage} onChange={onChange} name="text"/>
                        <button onClick={addPost}>send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs