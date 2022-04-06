import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/contactsSlice";

interface ContactsListAddFormProps {
    onAbortAdding: () => void;
};


function ContactsListAddForm(
    {onAbortAdding} : ContactsListAddFormProps
) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    const changeNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const changePhoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    }
    const submitAddingHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nameValue = name.trim();
        const phoneValue = phone.trim();
        dispatch(add({
            name: nameValue,
            phone: phoneValue,
            id: Date.now()
        }));
        setName('');
        setPhone('');
        onAbortAdding();
    }

    return (
        <form 
        onSubmit={submitAddingHandler}>
            <div className="input-wrapper">
                <label 
                htmlFor="add-name">Имя:</label>
                <input 
                onChange={changeNameHandler}
                value={name}
                id="add-name"
                type="text" />
            </div>
            <div className="input-wrapper">
                <label 
                htmlFor="add-phone">Телефон:</label>
                <input 
                onChange={changePhoneHandler}
                value={phone}
                id="add-phone"
                type="text" />
            </div>
            <div className="fom-action">
                <button 
                type="submit">Добавить</button>
                <button 
                onClick={onAbortAdding}
                type="button">Отменить</button>
            </div>
        </form>
    );
}

export default ContactsListAddForm;

