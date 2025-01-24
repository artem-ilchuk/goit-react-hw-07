import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.card}>
      <div className={s.user}>
        <div className={s.data}>
          <FaUser className={s.icon} size={25} />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.data}>
          <FaPhone className={s.icon} size={25} />
          <p className={s.number}>{number}</p>
        </div>
      </div>
      <button className={s.del_btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
