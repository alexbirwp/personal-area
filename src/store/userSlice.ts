import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
    login: string,
    password: string
}

const initialState = {
    isAuth: false,
    user: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            // магия авторизации
            state.isAuth = true;
            state.user = action.payload.login;
        },
        logout: (state) => {
            state.isAuth = initialState.isAuth;
            state.user = initialState.user;
        },
        register: (state, action: PayloadAction<User>) => {
            //магия регистрации
            state.isAuth = true;
            state.user = action.payload.login;
        }
    }
})

export const {login, logout, register} = userSlice.actions;

export default userSlice.reducer;