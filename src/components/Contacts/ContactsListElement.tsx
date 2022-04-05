import { Contact } from "../../store/contactsSlice";
import { remove, change } from "../../store/contactsSlice";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

interface ContactsListElementProps {
    contact: Contact
}

function ContactsListElement(
    {contact} : ContactsListElementProps
) {
    const {id, name, phone} = contact;
    const [isChanging, setIsChanging] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newPhone, setNewPhone] = useState(phone);
    const dispatch = useDispatch();

    const cancelChangeHandler = () => {
        setNewName(name);
        setNewPhone(phone);
        setIsChanging(false);
    }

    const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value)
    }
    const phoneChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPhone(event.target.value)
    }
    const submitChangesHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nameValue = newName.trim();
        const phoneValue = newPhone.trim();
        dispatch(change({
            ...contact,
            name: nameValue,
            phone: phoneValue,
        }));
        setIsChanging(false);
    }
    


    if(!isChanging) return (
        <li key={id}>
            <div 
            className="name">{name}</div>
            <div 
            className="phone">{phone}</div>
            <div className="actions">
                <button 
                onClick={() => dispatch(remove(id))}>Удалить</button>
                <button 
                onClick={() => setIsChanging(true)}>Изменить</button>
            </div>
        </li>
    )

    return (
        <li key={id}>
            <form onSubmit={submitChangesHandler}>
                <div 
                className="name">
                    <input 
                    onChange={nameChangeHandler}
                    type="text" 
                    value={newName}/>
                </div>
                <div 
                className="phone">
                    <input 
                    onChange={phoneChangeHandler}
                    type="text" 
                    value={newPhone}/>
                </div>
                <div className="actions">
                    <button type="button" onClick={cancelChangeHandler}>Отмена</button>
                    <button type="submit">Применить</button>
                </div>
            </form>
        </li>
    )
}

export default ContactsListElement