import React from "react";
import axios from "axios";
import classes from "./User.module.css";
import {UsersPropsType} from "./UsersContainer";

export class UsersClass extends React.Component<UsersPropsType> {

    componentDidMount (){
        if (this.props.usersPage.users.length === 0) {
            axios({
                method: 'get',
                url: 'https://social-network.samuraijs.com/api/1.0/users',
            })
                .then((response) => {
                    this.props.setUsers(response.data.items)
                });
        }
    }

    render() {
        return <div>

            {this.props.usersPage.users.map(users => {
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
                                    {users.userName}
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

    }
}