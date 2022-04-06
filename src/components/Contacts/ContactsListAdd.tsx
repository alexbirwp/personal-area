import { useState } from "react";
import ContactsListAddForm from "./ContactsListAddForm";

function ContactsListAdd() {
    const [isAdding, setIsAdding] = useState(false);


    return (
        <div className="adding-wrapper">

            {!isAdding && 
            <button 
            onClick={() => setIsAdding(true)}>
                Добавить
            </button>}

            {isAdding && 
            <ContactsListAddForm 
            onAbortAdding={() => setIsAdding(false)} />}

        </div>
    );
}

export default ContactsListAdd;