import React, { useState } from "react";
import LoginForm, { loginAction } from "../components/Login/LoginForm";


function LoginPage() {
    const [isLoging, setIsLoging] = useState(true);
    const actionName = isLoging ? 'Войти' : 'Зарегистрироваться';
    const action : loginAction = (login, password) => {
        
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