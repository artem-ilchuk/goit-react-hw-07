import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredContactsMemo,
  selectIsError,
  selectIsLoading,
} from "../../redux/selectors";
import { FaRegGrimace } from "react-icons/fa";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilteredContactsMemo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h2 className={s.error}>Something went wrong!</h2>;
  }

  if (filteredContacts.length === 0) {
    return (
      <div className={s.empty}>
        <FaRegGrimace className={s.icon} size={30} />
        <p className={s.empty_text}>No contacts found. Try adding some!</p>
      </div>
    );
  }

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
