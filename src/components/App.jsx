import { Component } from "react";
import { nanoid } from 'nanoid';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }



  render() {
    return (
      <PhonebookForm/>
    )
  }

};
