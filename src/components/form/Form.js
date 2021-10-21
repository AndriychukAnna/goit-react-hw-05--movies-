import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ isNameExist, onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const reset = () => {
    setName("");
    setNumber("");
  };
  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    name === "name" && setName(value);
    name === "number" && setNumber(value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name,
      number,
      id: uuidv4(),
    };

    if (isNameExist(name)) {
      return alert(`${name} is already in contacts`);
    }
    onSubmit(newContact);
    reset();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <label>
        Name
        <input
          value={name}
          onChange={onChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        Number
        <input
          value={number}
          onChange={onChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
Form.propTypes = {
  isNameExist: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
