import { Contact } from "../../store/contactsSlice";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import { changeContact, removeContact } from "../../store/contacts-actions";

interface ContactsListElementProps {
    contact: Contact
}

function ContactsListElement(
    {contact} : ContactsListElementProps
) {
    const {id, name, phone} = contact;
    const [isChanging, setIsChanging] = useState(false);

    const [newNameInput, newName, setNewName] = useInput(name, 'string');
    const [newPhoneInput, newPhone, setNewPhone] = useInput(phone, 'string');

    const dispatch = useDispatch();

    const cancelChangeHandler = () => {
        setNewName(name);
        setNewPhone(phone);
        setIsChanging(false);
    }

    const submitChangesHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nameValue = newName.trim();
        const phoneValue = newPhone.trim();
        changeContact({
            ...contact,
            name: nameValue,
            phone: phoneValue,
        })(dispatch)
        setIsChanging(false);
    }
    
    const elementView = (
        <div className="list-element">
            <div 
            className="name">{name}</div>
            <div 
            className="phone">{phone}</div>
            <div className="actions">
                <button 
                onClick={() => removeContact(id)(dispatch)}>Удалить</button>
                <button 
                onClick={() => setIsChanging(true)}>Изменить</button>
            </div>
        </div>
    );

    const elementChange = (
        <form 
        className="list-element"
        onSubmit={submitChangesHandler}>
            <div 
            className="name">
                {newNameInput}
            </div>
            <div 
            className="phone">
                {newPhoneInput}
            </div>
            <div className="actions">
                <button type="button" onClick={cancelChangeHandler}>Отмена</button>
                <button type="submit">Применить</button>
            </div>
        </form>
    );


    return (
    <li>
        {isChanging ? elementChange : elementView}
    </li>
    )
}

export default ContactsListElement