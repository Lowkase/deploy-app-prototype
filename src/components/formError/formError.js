import React from 'react'
import PropTypes from "prop-types";

// FORM ERROR
const FormError = (props) => {
    return (
        <div className={`m-form-error ${ props.scheme }`}>{ props.text }</div>
    );
}

FormError.propTypes = {
    scheme: PropTypes.string,
    text: PropTypes.string,
};
  
export default FormError