import React from "react";
import {UsersPropsType} from "./UsersContainer";
import Users from "./Users";
import {usersAPI} from "../API/UserAPI";

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.firstCount, this.props.pageSize)

        // usersAPI.getUsers(this.props.firstCount, this.props.pageSize).then(data =>
        //     this.props.setUsers(data.items)
        // )
    }

    firstCountHandler = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
        // this.props.isLoader(true)
        // this.props.setCurrentUsers(pageNumber)
        //
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then((data) => {
        //         this.props.setUsers(data.items)
        //         this.props.isLoader(false)
        //     });
    }

    render() {
        return <Users
            usersPage={this.props.usersPage}
            pageSize={this.props.pageSize}
            totalUsersCounter={this.props.totalUsersCounter}
            firstCount={this.props.firstCount}
            firstCountHandler={this.firstCountHandler}
            loader={this.props.Loader}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followInProgress={this.props.followInProgress}
            isFetching={this.props.isFetching}
            followSucces={this.props.followSucces}
            unFollowSucces={this.props.unFollowSucces}
        />
    }
}

