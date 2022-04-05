import React from "react";
import { useState } from "react";

interface contactsSearchProps {
    onSearch: (str: string) => void;
}

function ContactsSearch({onSearch} : contactsSearchProps) {

    const [searchValue, setSearchValue] = useState('');

    function onSearchHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setSearchValue(value);
        onSearch(value);
    }

    return (
        <form>
            <label htmlFor="contacts_search">Найти</label>
            <input 
            onChange={onSearchHandler}
            value={searchValue}
            id="contacts_search"
            name="search" 
            type="text" />
        </form>
    );
}

export default ContactsSearch;