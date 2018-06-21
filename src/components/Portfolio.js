import React, { Component } from "react";
import "./Portfolio.css"
import PropTypes from "prop-types";

function Portfolio(props) {
  return (
    <div className="contact">
      <span>{props.name}</span>
    </div>
  );
}

Portfolio.propTypes = {
  name: PropTypes.string.isRequired
};

export default Portfolio;
