import React, {ChangeEvent} from 'react'
import classes from './Dialogs.module.css'
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from "./DialogsMessage/Message";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs = (props: DialogsPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeMessage(e.currentTarget.value);
    }

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogsBlock}>
                <ul className={classes.dialogsItem}>
                    {props.dialogsPage.dialogs.map(d => <DialogsItem key={d.id} id={d.id} name={d.name}/>)}

                </ul>
                <div className={classes.dialogsMessage}>
                    <div>
                        {props.dialogsPage.message.map(m => <Message key={m.id} id={m.id} img={m.img} message={m.message}/>)}
                        <textarea value={props.dialogsPage.newMessage} onChange={onChangeHandler} name="text"/>
                        <button onClick={props.addMessage}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs