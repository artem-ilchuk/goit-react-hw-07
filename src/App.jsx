import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className="app-container">
      <div className="left-panel">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </div>
      <div className="right-panel">
        <ContactList />
      </div>
    </div>
  );
}

export default App;
