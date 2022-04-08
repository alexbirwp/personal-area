import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUserContactsList } from '../api/contactApi';

export const fetchUserList = createAsyncThunk(
    'contacts/fetchList', 
    async (userId : number) => {
        const list = await getUserContactsList(userId)
        return list;
    }
);

export interface Contact {
    id: number;
    name: string;
    phone: string;
}
interface initialStateInterface {
    contacts: Contact[]
}

const initialState : initialStateInterface = {
    contacts: []
};

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        update: (state, action : PayloadAction<Contact[]>) => {
            state.contacts = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserList.fulfilled, (state, action) => {
            if (action.payload !== null) 
                state.contacts = action.payload
        })
    }
});

export const { update } = contactSlice.actions;

export default contactSlice.reducer;