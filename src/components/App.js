import { useEffect, useState } from "react";
import Contacts from "./contacts/Contacts";
import Filter from "./filter/Filter";
import Form from "./form/Form";
import Section from "./section/Section";

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");
  const onChangeFilter = (e) => setFilter(e.currentTarget.value);
  const filterName = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const isNameExist = (formState) => {
    const some = contacts.some(
      (contact) => contact.name.toLowerCase() === formState.toLowerCase()
    );
    return some;
  };
  const formHandler = (data) => {
    setContacts((prev) => {
      return [...prev, data];
    });
  };
  const onDelete = (e) => {
    e.preventDefault();
    const newFilter = contacts.filter(
      (contact) => e.target.name !== contact.id
    );
    setContacts([...newFilter]);
  };
  useEffect(() => {
    if (contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);
  return (
    <>
      <Section title="Phonebook">
        <Form isNameExist={isNameExist} onSubmit={formHandler} />
      </Section>
      <Section title={"Contacts"}>
        <Filter value={filter} onChange={onChangeFilter} />
        {contacts.length !== 0 && (
          <Contacts onDelete={onDelete} options={filterName} />
        )}
      </Section>
    </>
  );
}
