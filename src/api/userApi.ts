import { User } from "../store/userSlice";

const URL = 'http://localhost:5000';
const URL_USERS = `${URL}/users`;

interface dbUser {
    login: string;
    password: string;
    id: number;
}
const getUsers = async () => {
    const response = await fetch(URL_USERS);
    const data : dbUser[]  = await response.json();
    return data;
}

const findUser = async (user: User) => {
    const users = await getUsers();
    return users.find(
        curUser => curUser.login === user.login
    );
}

const addUser = async (user: dbUser) => {
    await fetch(URL_USERS, {
        method: "POST",
        body: JSON.stringify(user)
    })
}

export const loginUser = async (user: User) => {
    const foundedUser = await findUser(user);
    if(foundedUser !== undefined && foundedUser.password === user.password) return {
        login: foundedUser.login
    };
    
    return null;
}

export const registerUser = async (user: User) => {
    const foundedUser = await findUser(user);
    if (foundedUser !== undefined) return null;

    const newUser : dbUser = {
        id: Date.now(),
        ...user
    };
    await addUser(newUser);
    return {
        login: newUser.login
    };
}
