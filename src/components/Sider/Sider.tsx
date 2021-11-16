import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Sider.module.css'
import {siderMenuType} from "../Redux/State";

type SidersMenyTypes = {
    siderMenu: Array<siderMenuType>
}

const Sider: React.FC<SidersMenyTypes> = (props) => {
const map = props.siderMenu.map( (el) => {
    return <li key={el.id} className={classes.item__link}><NavLink className={classes.item__href} to={el.name} >{el.name}</NavLink></li>
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