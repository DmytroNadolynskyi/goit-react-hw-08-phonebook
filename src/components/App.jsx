import { Conteiner, Title, ContactTitle } from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { useEffect } from 'react';

import { useDispatch,useSelector } from 'react-redux';
import { requestContacts } from 'redux/operations/operations';
import { getIsLoading, getError, getContacts } from 'redux/selectors';

import Loader from './Loader/Loader';

const App = () => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  return (
    <Conteiner>
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && <Loader />}
      {!isLoading && contacts.length > 0 && (
        <>
          <ContactTitle>Contacts</ContactTitle>
          <Filter />

          <ContactList />
        </>
      )}
      {error && <p>{error}</p>}
    </Conteiner>
  );
};
export default App;
