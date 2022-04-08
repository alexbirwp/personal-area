import { Contact } from "../store/contactsSlice";

const URL = 'http://localhost:5000';
const URL_CONTACTS = `${URL}/users_contacts`;

interface dbContacts {
    userId: number,
    contacts: Contact[];
    id: number,
}

const getUserContacts = async (
    searchUserId : number
) => {
    const response = await fetch(URL_CONTACTS)
    const data : dbContacts[] = await response.json();
    const currentUserContact = data.find(
        ({userId}) => userId === searchUserId
    );

    if (currentUserContact) return currentUserContact;

    return null;
}

export const getUserContactsList = async (
    searchUserId : number
) => {
    const userContacts = await getUserContacts(searchUserId);
    if(userContacts === null) return null;
    
    return userContacts.contacts;
}

export const createUserContactsList = async (userId: number) => {
    const response = await fetch(URL_CONTACTS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            contacts: []
        })
    })
    const userContacts : dbContacts = await response.json();
    return userContacts.id;
}

export const updateUserContacts = async (userId: number, contacts: Contact[]) => {
    const userContact = await getUserContacts(userId);
    if (userContact === null) return null;

    const userContactId = userContact.id;
    const url = `${URL_CONTACTS}/${userContactId}`;

    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({contacts})
    });
    const data : dbContacts = await response.json()

    return data.contacts
}
