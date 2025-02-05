import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contactsOps";
import { FaUser, FaPhone } from 'react-icons/fa';
import s from './ContactItem.module.css';
import PropTypes from "prop-types";

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.contact}>
        <div className={s.contact_data}>
          <div className={s.label}>
            <FaUser />
            <p>{name}</p>
          </div>
          <div className={s.label}>
            <FaPhone />
            <p>{number}</p>
          </div>
        </div>
        <button className={s.btn} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired, 
  onDelete: PropTypes.func.isRequired,
};
export default ContactItem;
