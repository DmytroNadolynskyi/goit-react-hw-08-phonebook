import { Conteiner, Title, ContactTitle } from './Contacts.styled';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading, getError, getContacts } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
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