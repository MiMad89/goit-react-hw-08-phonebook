import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsForm.module.css';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const stateContacts = useSelector(selectContacts);
  const stateContactsNames = stateContacts.map(contact => contact.name);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    if (stateContactsNames.includes(contact.name)) {
      e.target.reset();
      return alert(`${contact.name} is alredy in contacts`);
    }

    dispatch(addContact(contact));

    e.target.reset();
  };

  return (
    <>
      <form className={css.contactsForm} onSubmit={handleSubmit}>
        <label className={css.label}>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label}>Number</label>
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          // pattern="^[+]?[0-9]{1,3}-?[0-9]{1,3}-?[0-9]{1,3}-?[0-9]{2,4}$"
          title="Phone number must be 11 digits and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +"
          required
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};


// import {Button, TextField} from '@mui/material';

// const styles = {
//   container: ['flex', 'justify-center'].join(' '),
//   form: ['flex', 'flex-col', 'items-start', 'max-w-sm'].join(' '),
//   label: ['flex', 'flex-col', 'mb-5', 'w-60'].join(' '),
// };

// export const ContactsForm = ({ onSubmit}) => {

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit(e);
//   };

//   return (
//     <div className={styles.container}>
//     <form onSubmit={handleSubmit} className={styles.form}>
//       <label className={styles.label}>
//         <TextField
//           type="text"
//           size="small"
//           name="name"
//           label="Name"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>

//       <label className={styles.label}>
//         <TextField
//           type="tel"
//           size="small"
//           name="number"
//           label="Number"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>

//       <Button type="submit" variant="contained" style={{ margin: '0 auto' }}>
//         Save
//       </Button>
//     </form>
//   </div>
// );
// };
