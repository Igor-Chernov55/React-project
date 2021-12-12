import React from "react";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";
import Users from "./Users";

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            axios({
                method: 'get',
                url: `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.firstCount}&count=${this.props.pageSize}`,
            })
                .then((response) => {
                    this.props.setUsers(response.data.items)
                });
        }
    }


    firstCountHandler = (p: number) => {
        this.props.setCurrentUsers(p)

            axios({
                method: 'get',
                url: `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,
            })
                .then((response) => {
                    this.props.setUsers(response.data.items)
                });
    }

    render() {
        return <Users usersPage={this.props.usersPage}
                      pageSize={this.props.pageSize}
                      totalUsersCounter={this.props.totalUsersCounter}
                      firstCount={this.props.firstCount}
                      firstCountHandler={this.firstCountHandler}

        />
    }
}

