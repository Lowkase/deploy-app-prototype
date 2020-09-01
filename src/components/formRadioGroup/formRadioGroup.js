import React from 'react'
import PropTypes from "prop-types";

import FormDescription from "../formDescription/formDescription"
import FormError from "../formError/formError"
import FormLabel from "../formLabel/formLabel"

// FORM RADIO
const FormRadioGroup = (props) => {
    return (
        <div className="m-form-radio-group">
            <FormLabel text={ props.label } />
            <FormDescription text={ props.description} />
            { props.children }
            <FormError scheme="rounded" text={ props.error} />
        </div>
    );
}

FormRadioGroup.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    error: PropTypes.string,
};
  
export default FormRadioGroup