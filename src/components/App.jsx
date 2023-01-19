import { Component } from "react";
import { nanoid } from 'nanoid';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: [ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],

    filter: '',
  }

addContacts = (name, number) => {
  console.log(name, number);
  this.setState(prevState =>({
    contacts: [...prevState.contacts, {id: nanoid(), name, number,},]
  }));

};
filterContact = e => {
  this.setState({ filter: e.currentTarget.value });
};

deleteContact = contactId => {
this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== contactId),
}))
}

getFilteredContact = () => {
  const { filter, contacts } = this.state;
  const normalizedFilterValue = filter.toLowerCase().trim();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilterValue)
  );
};

  render() {
    const { filter } = this.state;
    return (
      <div>
      <PhonebookForm onSubmit={this.addContacts}/>
      <Filter filterValue={filter} onChange={this.filterContact} />
      <ContactsList contacts={this.getFilteredContact()} onDelete={this.deleteContact} />
       </div>
    )
  }

};
