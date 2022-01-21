import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authUserAC} from "../Redux/AuthUsersReducer";
import {authAPI} from "../API/UserAPI";

export class HeaderContainer extends React.Component<any> {

    componentDidMount() {
        authAPI.me().then((response) => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                authUserAC(id, login, email)
            }
        });
    }

    render() {
        return <Header
            {...this.props}
            id={this.props.id}
            email={this.props.email}
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }
}

const mapStateProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateProps, {authUserAC})(Header)