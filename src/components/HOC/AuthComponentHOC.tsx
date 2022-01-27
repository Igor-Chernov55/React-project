import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {compose} from "redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.authUser.isAuth
    }
}

export function authComponentHOC<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={'/login'} />

        return <Component {...restProps as T}/>
    }

    return compose<ComponentType>(connect(mapStateProps)(RedirectComponent))

}