import React from 'react';
import {Field, reduxForm} from "redux-form";

export const Login = (props: any) => {

    let LoginReduxForm = reduxForm({
        form: 'login'
    })(LoginForm)
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm/>
        </div>
    );
};

export const LoginForm = () => {
    return (
        <form>
            <Field placeholder={'email'} name={'login'} component={'input'}/>
            <Field placeholder={'password'} name={'password'} component={'input'}/>
            <div>
                Remember me
                <Field placeholder={'password'} name={'rememberMe'} type={"checkbox"}/>
            </div>
        </form>
    )
}