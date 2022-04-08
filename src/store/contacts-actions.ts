import { updateUserContacts } from "../api/contactApi";
import { Contact, update } from "./contactsSlice";
import { AppDispatch, store } from "./store";


const getUserAndContacts = () => {
    const currentState = store.getState();
    const userId = currentState.user.userId;
    const contacts = currentState.contacts.contacts;
    return {userId, contacts}
}

export const addContact = (contact : Contact) => {
    return async (dispatch : AppDispatch) => {
        const {userId, contacts} = getUserAndContacts();
        if (userId === null) return;
        const updatedContacts = [...contacts, contact]
        const newContacts = await updateUserContacts(userId, updatedContacts) || [];
        dispatch(update(newContacts))
    }
}
export const removeContact = (contactId : number) => {
    return async (dispatch : AppDispatch) => {
        const {userId, contacts} = getUserAndContacts();
        if (userId === null) return;

        const contactPosition = 
                contacts.findIndex(({id}) => id === contactId);

        const updatedContacts = [
            ...contacts.slice(0, contactPosition),
            ...contacts.slice(contactPosition + 1),
        ];
        
        const newContacts = await updateUserContacts(userId, updatedContacts) || [];
        dispatch(update(newContacts))
    }
}
export const changeContact = (contact : Contact) => {
    return async (dispatch : AppDispatch) => {
        const {userId, contacts} = getUserAndContacts();
        if (userId === null) return;

        const contactPosition = 
                contacts.findIndex(({id}) => id === contact.id);
        const updatedContacts = [
            ...contacts.slice(0, contactPosition),
            contact,
            ...contacts.slice(contactPosition + 1),
        ];

        const newContacts = await updateUserContacts(userId, updatedContacts) || [];
        dispatch(update(newContacts))
    }
}