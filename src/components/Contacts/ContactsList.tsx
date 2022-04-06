import { Contact } from "../../store/contactsSlice";
import ContactsListAdd from "./ContactsListAdd";
import ContactsListElement from "./ContactsListElement";

interface ContactsListProps {
    contacts: Contact[]
}

function ContactsList({contacts} : ContactsListProps) {
    return (
        <>
            <ul className="contact-list">
            {contacts.map(
                contact => 
                <ContactsListElement key={contact.id} contact={contact}/>
            )}
            </ul>
            <ContactsListAdd />
        </>
    )
}

export default ContactsList;