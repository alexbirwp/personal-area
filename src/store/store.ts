import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from '../store/contactsSlice';
import userReduser from '../store/userSlice'

export const store = configureStore({
    reducer: {
        contacts: contactsReduser,
        user: userReduser
    },
});



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch