import React from 'react';
import classes from "./User.module.css";
import {UsersReducerType} from "../Redux/UsersReducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

type UsersPropsType = {
    usersPage: UsersReducerType
    pageSize: number
    totalUsersCounter: number
    firstCount: number
    firstCountHandler: (firstCount: number) => void
    loader: boolean
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users = (props: UsersPropsType) => {

    let pageCount = Math.ceil(props.totalUsersCounter / props.pageSize)

    let pages = [];
    for (let i = 1; i < pageCount; i++) {
        pages.push(i)
    }

    console.log(props.loader)
    const firstCountHandler = (p: number) => {
        props.firstCountHandler(p)
    }

    return (

        <div>
            <div className={classes.containerPagination}>

                {props.loader ? <div><img
                    src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif"
                    alt="loaderImage"/></div> : false}

                {pages.map(m => {

                    return <span onClick={() => {
                        firstCountHandler(m)
                    }} className={props.usersPage.firstCount === m ? classes.numBold : ''}>{m}</span>
                })}

            </div>
            {props.usersPage.users.map(users => {

                return <div className={classes.container}>
                    <div className={classes.blockAvatar}>
                        <NavLink to={`/profile/${users.id}`}>
                            <img className={classes.imageAvatar}
                                 src={users.photos.large}
                                 alt="avatar"/>
                        </NavLink>
                        <div>
                            {users.followed ?
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {
                                        withCredentials: true,
                                        headers: {
                                        'API-KEY': '78b9fdb7-2cb3-4cc9-90a9-7547abd3a933'
                                    }
                                    }).then((response) => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(users.id)
                                            }
                                    })
                                }
                                }>unFollow</button>
                                :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {},{
                                        withCredentials: true,
                                        headers: {
                                           'API-KEY': '78b9fdb7-2cb3-4cc9-90a9-7547abd3a933'
                                        }
                                    }).then((response) => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(users.id)
                                        }
                                    })
                                }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={classes.blockUserInfo}>
                        <div>
                            <div>
                                <div>
                                    {users.name}
                                </div>
                            </div>
                            <div className={classes.blockInfoText}>
                                {users.status}
                            </div>
                        </div>

                        <div>
                            {/*<div>{users.location.country}</div>*/}
                            {/*<div>{users.location.city}</div>*/}
                        </div>
                    </div>
                </div>

            })}
        </div>
    );
};

export default Users;