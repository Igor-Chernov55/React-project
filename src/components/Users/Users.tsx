import React from 'react';
import classes from "./User.module.css";
import {UsersReducerType} from "../Redux/UsersReducer";

type UsersPropsType = {
    usersPage: UsersReducerType
    pageSize: number
    totalUsersCounter: number
    firstCount: number
    firstCountHandler: (firstCount: number) => void
}

const Users = (props: UsersPropsType ) => {
    let pageCount = Math.ceil(props.totalUsersCounter / props.pageSize)

    let pages = [];
    for (let i = 1; i < pageCount; i++) {
        pages.push(i)
    }

    const firstCountHandler = (p: number) => {
        props.firstCountHandler(p)
    }

    return (

     <div>
        <div className={classes.containerPagination}>
            {pages.map(m => {

                return <span onClick={() => {firstCountHandler(m)}} className={props.usersPage.firstCount === m ? classes.numBold : ''}>{m}</span>
            })}
        </div>
        {props.usersPage.users.map(users => {
            return <div className={classes.container}>
                <div className={classes.blockAvatar}>
                    <img className={classes.imageAvatar}
                         src={users.text}
                         alt="avatar"/>
                    <button>follow</button>
                </div>
                <div className={classes.blockUserInfo}>
                    <div>
                        <div>
                            <div>
                                {users.name}
                            </div>
                        </div>
                        <div className={classes.blockInfoText}>
                            {users.text}
                        </div>
                    </div>

                    <div>
                        <div>{"users.location.country"}</div>
                        <div>{"users.location.city"}</div>
                    </div>
                </div>
            </div>

        })}
    </div>
    );
};

export default Users;