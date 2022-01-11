import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authUser} from "../Redux/AuthUsersReducer";

export class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(
           `https://social-network.samuraijs.com/api/1.0/auth/me`
        ).then((response) => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                this.props.authUser(id, login, email)
            }
        });

    }

    render() {
        return <Header {...this.props} />
    }

}

const mapStateProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateProps, {authUser})(Header)