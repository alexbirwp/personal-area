import { Contact } from "../../store/contactsSlice";
import ContactsListElement from "./ContactsListElement";

interface ContactsListProps {
    contacts: Contact[]
}

function ContactsList({contacts} : ContactsListProps) {
    return (
        <div>
            <ul>
            {contacts.map(
                contact => 
                <ContactsListElement key={contact.id} contact={contact}/>
            )}
            </ul>
        </div>
    )
}

export default ContactsList;