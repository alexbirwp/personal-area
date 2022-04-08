import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { addContact } from "../../store/contacts-actions";

interface ContactsListAddFormProps {
    onAbortAdding: () => void;
};


function ContactsListAddForm(
    {onAbortAdding} : ContactsListAddFormProps
) {
    const [nameInput, name, setName] = useInput('', 'string');
    const [phoneInput, phone, setPhone] = useInput('', 'string');
    const dispatch = useDispatch();

    const submitAddingHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nameValue = name.trim();
        const phoneValue = phone.trim();
        addContact({
            name: nameValue,
            phone: phoneValue,
            id: Date.now()
        })(dispatch);
        setName('');
        setPhone('');
        onAbortAdding();
    }

    return (
        <form 
        onSubmit={submitAddingHandler}>
            <div className="input-wrapper">
                <label>Имя:</label>
                {nameInput}
            </div>
            <div className="input-wrapper">
                <label>Телефон:</label>
                {phoneInput}
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

