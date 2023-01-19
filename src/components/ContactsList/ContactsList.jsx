import { Contact } from '../Contact/Contact';

export const ContactsList = ({contacts, onDelete}) => {
    return (
        <ul>{contacts.map(({id, name, number})=> (<Contact  key={id} userId={id} contactName={name} contactNumber={number} onDelete={onDelete}/>
        ))}
            
        </ul>
    )
}