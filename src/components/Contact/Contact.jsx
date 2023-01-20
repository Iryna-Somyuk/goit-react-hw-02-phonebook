import PropTypes from 'prop-types';

export const Contact = ({ userId, contactName, contactNumber, onDelete }) => {
  return (
    <div key={userId}>
      <span>
        {contactName}: {contactNumber}
      </span>
      <button onClick={() => onDelete(userId)}>Delete</button>
    </div>
  );
};

Contact.propTypes = {
    userId: PropTypes.string.isRequired,
    contactName: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  };