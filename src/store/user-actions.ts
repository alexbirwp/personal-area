import { createUserContactsList } from "../api/contactApi";
import { loginUser, registerUser } from "../api/userApi";
import { fetchUserList } from "./contactsSlice";
import { AppDispatch } from "./store";
import { login, register, User } from "./userSlice";

export const asyncLoginUser = (user : User) => {
    return async (dispatch : AppDispatch) => {
        const logedUser = await loginUser(user);
        if (logedUser === null) return;
        dispatch(login({
            login: logedUser.login,
            id: logedUser.id
        }));
        dispatch(fetchUserList(logedUser.id))
    }
}

export const asyncRegisterUser = (user : User) => {
    return async (dispatch : AppDispatch) => {
        const registeredUser = await registerUser(user);
        if (registeredUser === null) return;
        dispatch(register({
            login: registeredUser.login,
            id: registeredUser.id
        }));
        await createUserContactsList(registeredUser.id);
        dispatch(fetchUserList(registeredUser.id));
    }
}