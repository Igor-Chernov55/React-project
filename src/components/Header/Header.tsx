import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Header.module.css'
import {HeaderType} from "../Redux/State";
import {NavMenu} from "./NavMenu/NavMenu";

export type DialogPageTypes = {
    header: Array<HeaderType>
}

const Header: React.FC<DialogPageTypes> = (props) => {
    const map = props.header.map((m) => {
        return (<NavMenu key={m.id} id={m.id} name={m.name}/>)
    })
    return (
        <header className={classes.headerMain}>

            <NavLink to='/'><img className={classes.imageMain}
                                 src="https://media.istockphoto.com/vectors/initial-letter-o-swoosh-orbit-logo-designs-vector-o-initial-logo-for-vector-id1256830588?k=20&m=1256830588&s=170667a&w=0&h=GmfquF0BgJwSJVlLRMQE8sTGo266tOP-Aoa5XewVHOo="
                                 alt="logo"/></NavLink>
            <nav>
                <ul className={classes.headerItem}>
                    {map}
                </ul>
            </nav>
        </header>
    )
}

export default Header