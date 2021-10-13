import React from "react";
import classes from '../Dialogs.module.css'

type DialogsItemType = {
    id: number
    name: string
}

export const DialogsItem: React.FC<DialogsItemType> = (props) => {

    return (
        <li className={classes.dialogsLink}>{props.name}</li>
    )
}

