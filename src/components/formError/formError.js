import React from 'react'
import PropTypes from "prop-types";

// FORM ERROR
const FormError = (props) => {
    return (
        <div className="m-form-error">{ props.text }</div>
    );
}

FormError.propTypes = {
    text: PropTypes.string,
};
  
export default FormError