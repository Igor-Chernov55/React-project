import React from "react";
import axios from "axios";
import {Profile} from "../Main/Profile/Profile";


export class ProfileUsersClass extends React.Component<any, any>{

    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            axios({
                method: 'get',
                url: `https://social-network.samuraijs.com/api/1.0/profile/2`,
            })
                .then((response) => {
                    this.props.setUsersProfile(response.data.items)
                });
        }
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}