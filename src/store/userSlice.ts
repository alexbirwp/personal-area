import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
    login: string,
    password: string
}

const initialState = {
    isAuth: false,
    token: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export default userSlice.reducer;