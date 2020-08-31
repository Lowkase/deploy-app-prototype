import React from 'react'
import PropTypes from "prop-types";

// FORM INPUT
const FormInput = (props) => {
    return (
        <div
            className={`m-form-input ${ props.className }`}
        >
            { props.children }
        </div>
    );
}

FormInput.propTypes = {
    className: PropTypes.string,
};

export default FormInput