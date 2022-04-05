import ContactsList from "./ContactsList";


export interface Contact {
    id: number,
    name: string,
    phone: string,
}

const DUMMY_ARRAY : Contact[] = [
    {
        id: 1,
        name: 'alex',
        phone: '+799999999'
    },
    {
        id: 2,
        name: 'balex',
        phone: '+799999999'
    },
    {
        id: 3,
        name: 'salex',
        phone: '+799999999'
    }
];

function Contacts() {
    return (
        <div>
            <ContactsList contacts={DUMMY_ARRAY}/>
        </div>
    );
}

export default Contacts