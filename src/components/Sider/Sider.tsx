import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import classes from './Sider.module.css'

type SiderType = {
    id: number
    name: string
    forRoutes: string
}

type SidersMenuTypes = {
    siderMenu: Array<SiderType>
}

const initialState:SidersMenuTypes = {
    siderMenu: [
        {id: 1, name: 'Profile', forRoutes: '/profile'},
        {id: 2, name: 'Dialogs', forRoutes: '/dialogs'},
        {id: 3, name: 'Users', forRoutes: '/users'},
        {id: 4, name: 'News', forRoutes: '/news'},
        {id: 5, name: 'Music', forRoutes: '/music'},
    ]
}

const Sider = () => {
const map = initialState.siderMenu.map( (el: any) => {
    return <li key={el.id} className={classes.item__link}><NavLink className={classes.item__href} to={el.forRoutes} >{el.name}</NavLink></li>
} )
    return (
        <nav>
            <ul className={classes.item}>
                {map}
            </ul>
        </nav>
    )
}

export default Sider