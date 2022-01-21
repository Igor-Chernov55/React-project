import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Header.module.css'
import {NavMenu} from "./NavMenu/NavMenu";

type HeaderType = {
    id: number
    name: string
}

type DialogPageTypes = {
    header: Array<HeaderType>
}

const initialStateType: DialogPageTypes = {
    header: [
        {id: 1, name: 'About us'},
        {id: 2, name: 'Contacts'},
        {id: 3, name: 'Map'}
    ]
}
export type AuthUsersType = {
    id: number
    email: string | null
    login: string | null
    isAuth: boolean
}

const Header = (props: AuthUsersType) => {
    const map = initialStateType.header.map((m) => {
        return (<NavMenu key={m.id} id={m.id} name={m.name}/>)
    })
    return (
        <header className={classes.headerMain}>

            <NavLink to='/'>
                <img className={classes.imageMain}
                     src="https://media.istockphoto.com/vectors/initial-letter-o-swoosh-orbit-logo-designs-vector-o-initial-logo-for-vector-id1256830588?k=20&m=1256830588&s=170667a&w=0&h=GmfquF0BgJwSJVlLRMQE8sTGo266tOP-Aoa5XewVHOo="
                     alt="logo"/></NavLink>
            <nav>
                <div>{props.isAuth ? props.login : <NavLink to='/login'>loggggin</NavLink>}</div>
                <ul className={classes.headerItem}>
                    {map}
                </ul>
            </nav>
        </header>
    )
}

export default Header