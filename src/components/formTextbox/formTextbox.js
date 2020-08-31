import React from 'react'
import PropTypes from "prop-types";

import FormDescription from "../formDescription/formDescription"
import FormError from "../formError/formError"
import FormLabel from "../formLabel/formLabel"

// FORM TEXTBOX
const FormTextbox = (props) => {
    return (
        <div className="m-form-textbox">
            <FormLabel text={ props.label } />
            <input type="text" />
            <FormError text={ props.error} />
            <FormDescription text={ props.description} />
        </div>
    );
}

FormTextbox.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    error: PropTypes.string,
};
  
export default FormTextbox