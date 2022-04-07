import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm, { loginAction } from "../components/Login/LoginForm";
import { login, register } from "../store/userSlice";


function LoginPage() {
    const dispatch = useDispatch()
    const [isLoging, setIsLoging] = useState(true);
    const actionName = isLoging ? 'Войти' : 'Зарегистрироваться';
    const action : loginAction = (UserLogin, UserPassword) => {
        if (isLoging) {
            dispatch(login({
                login: UserLogin,
                password: UserPassword
            }))
        } else {
            dispatch(register({
                login: UserLogin,
                password: UserPassword
            }))
        }
    }
    return (
        <div className="wrapper login-wrapper">
            <div className="login-header">
                <button
                onClick={() => setIsLoging(true)}
                className={
                    `${isLoging ? 'active' : ''}`
                }>
                    Войти
                </button>
                <button 
                onClick={() => setIsLoging(false)}
                className={
                    `${!isLoging ? 'active' : ''}`
                }>
                    Зарегестрироваться
                </button>
            </div>
            <LoginForm 
            actionName={actionName}
            action={action}/>
        </div>
    );
}

export default LoginPage;