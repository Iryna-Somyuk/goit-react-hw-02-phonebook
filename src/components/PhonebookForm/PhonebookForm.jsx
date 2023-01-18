export const PhonebookForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const { name } = event.target.elements;
    onSubmit(name.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Phonebook</h2>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
