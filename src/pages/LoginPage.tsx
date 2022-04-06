import React, { useState } from "react";


function LoginPage() {
    const [isLoging, setIsLoging] = useState(true);
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
        </div>
    );
}

export default LoginPage;