import React from 'react'
import PropTypes from "prop-types";

// FORM LABEL
const FormLabel = (props) => {
    return (
        <label>{ props.text }</label>
    );
}

FormLabel.propTypes = {
    text: PropTypes.string,
};
  
export default FormLabel