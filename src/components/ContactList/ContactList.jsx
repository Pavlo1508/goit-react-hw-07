import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import ContactItem from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const searchQuery = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.wrapper}>
      <ul>
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id} {...contact} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
