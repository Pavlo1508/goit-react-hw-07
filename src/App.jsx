import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { useEffect, useState } from "react";
import s from './App.module.css'

function App() {
	const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
	});
	
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

	const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(searchQuery.toLowerCase())
	);
	
	const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

	const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
	};
	
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ContactList
        onDelete={deleteContact}
        filteredContacts={filteredContacts}
      />
    </div>
  );
}

export default App
