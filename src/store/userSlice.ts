import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
    login: string,
    password: string
}

interface setUserInterface {
    login: string,
    id: number,
}
interface initialStateIterface {
    isAuth: boolean,
    user: string,
    userId: null | number
}
const initialState : initialStateIterface = {
    isAuth: false,
    user: '',
    userId: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<setUserInterface>) => {
            state.isAuth = true;
            state.user = action.payload.login;
            state.userId = action.payload.id;
        },
        logout: (state) => {
            state.isAuth = initialState.isAuth;
            state.user = initialState.user;
        },
        register: (state, action: PayloadAction<setUserInterface>) => {
            state.isAuth = true;
            state.user = action.payload.login;
            state.userId = action.payload.id;
        }
    }
})

export const {login, logout, register} = userSlice.actions;

export default userSlice.reducer;