import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/contactsSlice"; // 
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectFilteredContacts); // 

  return (
    <ul className={css.contacts_list}>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={() => dispatch(deleteContact(contact.id))} />
        </li>
      ))}
    </ul>
  );
}