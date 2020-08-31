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
            <FormError text={ props.error } />
            <FormDescription text={ props.description } />
        </div>
    );
}

FormSelect.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    error: PropTypes.string,
};
  
export default FormSelect