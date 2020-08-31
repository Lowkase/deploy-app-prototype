import React from 'react'
import PropTypes from "prop-types";

// FORM LABEL
const FormDescription = (props) => {
    return (
        <div className="m-form-description">{ props.text }</div>
    );
}

FormDescription.propTypes = {
    text: PropTypes.string,
};
  
export default FormDescription