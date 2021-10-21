import PropTypes from "prop-types";
import React from "react";

const Section = ({ title, children }) => {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
};
Section.propTypes = {
  state: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
