import PropTypes from 'prop-types';
// import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filterValue, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="name"
        value={filterValue}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
