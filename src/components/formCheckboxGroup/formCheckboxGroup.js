import React from 'react'
import PropTypes from "prop-types";

import FormDescription from "../formDescription/formDescription"
import FormError from "../formError/formError"
import FormLabel from "../formLabel/formLabel"

// FORM RADIO
const FormCheckboxGroup = (props) => {
    return (
        <div className="m-form-checkbox-group">
            <FormLabel text={ props.label } />
            <FormDescription text={ props.description} />
            { props.children }
            <FormError scheme="rounded" text={ props.error} />
        </div>
    );
}

FormCheckboxGroup.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    error: PropTypes.string,
};
  
export default FormCheckboxGroup