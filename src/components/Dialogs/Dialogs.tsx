import React, {ChangeEvent} from 'react'
import classes from './Dialogs.module.css'
import { DialogsType, MessageType} from "../StateComponents/State";
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from "./DialogsMessage/Message";

type DialogsPageTypes = {
    newMessage: string
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    addPost: () => void
    onChange: (text: string) => void
}

const Dialogs: React.FC<DialogsPageTypes> = (props: DialogsPageTypes) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(e.currentTarget.value);
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
                        <textarea value={props.newMessage} onChange={onChangeHandler} name="text"/>
                        <button onClick={props.addPost}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs