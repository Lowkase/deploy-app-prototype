import React from 'react'
import PropTypes from "prop-types";

import FormDescription from "../formDescription/formDescription"
import FormError from "../formError/formError"
import FormLabel from "../formLabel/formLabel"

// SELECT
const FormSelect = (props) => {
    return (
        <div className="m-form-select">
            <FormLabel text={ props.label } />
            <select>
                {props.children}
            </select>
            { props.isError ? (
                <FormError text={ props.error } />
            ) : (
                null
            )}
            { props.isDescription ? (
                <FormDescription text={ props.description } />
            ) : (
                null
            )}
        </div>
    );
}

FormSelect.propTypes = {
    label: PropTypes.string,
    isDescription: PropTypes.bool,
    description: PropTypes.string,
    isError: PropTypes.bool,
    error: PropTypes.string,
};

FormSelect.defaultProps = {
    isDescription: false,
    isError: false,
};

  
export default FormSelect