import React from "react";

type MessageTypes = {
    id: number
    img: string
    message: string
}


export const Message: React.FC<MessageTypes> = (props) => {

    return (
        <div>{props.message}</div>
    )
}