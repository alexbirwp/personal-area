import { loginUser, registerUser } from "../api/userApi";
import { AppDispatch } from "./store";
import { login, register, User } from "./userSlice";

export const asyncLoginUser = (user : User) => {
    return async (dispatch : AppDispatch) => {
        const logedUser = await loginUser(user);
        if (logedUser === null) return;
        dispatch(login(logedUser.login));
    }
}

export const asyncRegisterUser = (user : User) => {
    return async (dispatch : AppDispatch) => {
        const registeredUser = await registerUser(user);
        if (registeredUser === null) return;
        dispatch(register(registeredUser.login));
    }
}