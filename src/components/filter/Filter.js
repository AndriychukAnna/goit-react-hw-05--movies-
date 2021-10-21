import PropTypes from "prop-types";
import React from "react";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find
      <input
        value={value}
        type="text"
        onChange={onChange}
        name="filter"
      ></input>
    </label>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
