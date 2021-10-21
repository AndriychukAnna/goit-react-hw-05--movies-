import PropTypes from "prop-types";
import React from "react";

const Contacts = ({ options, onDelete }) => {
  return (
    <ul>
      {options.map((option) => {
        return (
          options.lendth !== 0 && (
            <li key={option.id}>
              {option.name}:{option.number}
              <button name={option.id} type="button" onClick={onDelete}>
                Delete
              </button>
            </li>
          )
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
export default Contacts;
