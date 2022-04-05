import { useState } from "react";
import ContactsList from "./ContactsList";
import ContactsSearch from "./ContactsSearch";
import { RootState } from '../../store/store';
import { useSelector } from "react-redux";





function Contacts() {
    const initialContacts = useSelector((state: RootState) => state.contacts.contacts);
    const [searchValue, setSearcValue] = useState('');

    const onSearch = (search: string) => setSearcValue(search);

    let filteredContacts = initialContacts;

    if (searchValue.trim()) {
        filteredContacts = initialContacts.filter(({name, phone}) => {
            const lowerSearch = searchValue.toLowerCase();
            const lowerName = name.toLowerCase();

            return lowerName.includes(lowerSearch) || phone.includes(searchValue)
        })
    }

    return (
        <div>
            <ContactsSearch onSearch={onSearch}/>
            <ContactsList contacts={filteredContacts}/>
        </div>
    );
}

export default Contacts