import React from 'react'
import classes from "../Header.module.css";

type NavMenuType = {
    id: number
    name: string
}

export const NavMenu: React.FC<NavMenuType> = (props) => {
    return (
        <>
            <li className={classes.headerItem__link}><a className={classes.headerItem__href} href="">{props.name}</a></li>
        </>
    )

}
