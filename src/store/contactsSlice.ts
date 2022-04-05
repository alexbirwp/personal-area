import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contact {
    id: number;
    name: string;
    phone: string;
}

const initialState = {
    contacts: [
        {
            id: 1,
            name: 'alex',
            phone: '+799999999'
        },
        {
            id: 2,
            name: 'balex',
            phone: '+799999999'
        },
        {
            id: 3,
            name: 'salex',
            phone: '+799999999'
        }
    ]
};

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        add: ({contacts}, {payload : contact}: PayloadAction<Contact>) => {
            contacts.push(contact);
        },
        remove: ({contacts}, {payload : contactId}: PayloadAction<number>) => {
            const contactPosition = 
                contacts.findIndex(({id}) => id === contactId);
            contacts.splice(contactPosition, 1);
        },
        change: ({contacts}, {payload: contact}:PayloadAction<Contact>) => {
            const contactPosition = contacts.findIndex(
                ({id}) => id === contact.id
            );
            contacts.splice(contactPosition, 1, contact);
        }
    }
});

export const { add, remove, change } = contactSlice.actions;

export default contactSlice.reducer;