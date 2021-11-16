import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../Redux/redux-store";
import {Dispatch} from "redux";


const mapStateUsers = (state: AppStateType) => {
    return {
        usersPage: state.usersPage.users
    }
}

const dispathUsers = (dispatch: Dispatch) => {
    return {

    }
}

export const UsersContainer = connect(mapStateUsers,dispathUsers)(Users)