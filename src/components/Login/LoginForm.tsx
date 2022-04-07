import useInput from "../../hooks/useInput";

export type loginAction = (login : string, password : string) => void;

interface LoginFormProps {
    action: loginAction,
    actionName: string,
}


function LoginForm({action, actionName} : LoginFormProps) {

    const [loginInput, login, setLogin] = useInput('', 'string');
    const [passwordInput, password, setPassword] = useInput('', 'password');

    const loginSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        action(login, password)
        setLogin('');
        setPassword('');
    }

    return (
        <form 
        className="login-form"
        onSubmit={loginSubmitHandler}>
            <div className="input-wrapper">
                <label htmlFor="authlogin">
                    Логин
                </label>
                {loginInput}
            </div>
            <div className="input-wrapper">
                <label htmlFor="authpass">
                    Пароль
                </label>
                {passwordInput}
            </div>
            <div className="fom-action">
                <button>{actionName}</button>
            </div>
        </form>
    )
}

export default LoginForm;