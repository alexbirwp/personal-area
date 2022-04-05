import { useState } from "react";
import ContactsList from "./ContactsList";
import ContactsSearch from "./ContactsSearch";


export interface Contact {
    id: number;
    name: string;
    phone: string;
}

const DUMMY_ARRAY : Contact[] = [
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
];

function Contacts() {
    const [contacts, setContacts] = useState(DUMMY_ARRAY);

    const onSearch = (search : string) => {
        setContacts(
            DUMMY_ARRAY.filter(({name, phone}) => 
                name.includes(search) || phone.includes(search)
            )
        )
    }

    return (
        <div>
            <ContactsSearch onSearch={onSearch}/>
            <ContactsList contacts={contacts}/>
        </div>
    );
}

export default Contacts