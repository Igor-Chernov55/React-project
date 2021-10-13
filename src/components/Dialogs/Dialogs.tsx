import React from 'react'
import classes from './Dialogs.module.css'
import {DialogsType, MessageType} from "../StateComponents/State";
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from "./DialogsMessage/Message";

type DialogsPageTypes ={
    dialogs: Array<DialogsType>
    message: Array<MessageType>
}

const Dialogs: React.FC<DialogsPageTypes> = (props) => {
    return (
        <div className={classes.Dialogs}>

            <div className={classes.dialogsBlock}>
                <ul className={classes.dialogsItem}>
                    {props.dialogs.map(d => <DialogsItem key={d.id} id={d.id} name={d.name} />)}

                </ul>
                <div className={classes.dialogsMessage}>
                    <div>
                        {props.message.map(m => <Message id={m.id} img={m.img} message={m.message}/>)}
                        <textarea name="text" id=""></textarea>
                        <button>send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs