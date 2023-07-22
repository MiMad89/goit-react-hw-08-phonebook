import { ContactsForm } from './ContactsForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import css from './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading, selectError } from 'redux/contacts/selectors';

export const App = () => {
  const dispatch = useDispatch();
  
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? <p>Loading contacts...</p> : <ContactsList />}
      {error && <p>Data loading error</p>}
    </div>
  );
};
