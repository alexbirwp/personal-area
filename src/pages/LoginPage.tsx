import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginForm, { loginAction } from "../components/Login/LoginForm";

import { asyncLoginUser, asyncRegisterUser } from "../store/user-actions";


function LoginPage() {
    const dispatch = useDispatch()
    const [isLoging, setIsLoging] = useState(true);
    const actionName = isLoging ? 'Войти' : 'Зарегистрироваться';
    const action : loginAction = (UserLogin, UserPassword) => {
        if (isLoging) {
            asyncLoginUser({
                login: UserLogin,
                password: UserPassword
            })(dispatch)
        } else {
            asyncRegisterUser({
                login: UserLogin,
                password: UserPassword
            })(dispatch)
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