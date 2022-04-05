import { Contact } from "./Contacts";

interface ContactsListProps {
    contacts: Contact[]
}

function ContactsList({contacts} : ContactsListProps) {
    return (
        <div>
            <ul>
            {contacts.map(({id, name, phone}) => (
                <li key={id}>
                    <div 
                    className="name">{name}</div>
                    <div 
                    className="phone">{phone}</div>
                    <div className="actions">
                        <button 
                        className="remove">Удалить</button>
                        <button 
                        className="change">Изменить</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactsList;