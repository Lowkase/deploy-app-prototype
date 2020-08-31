import React from 'react'
import PropTypes from "prop-types";

import FormDescription from "../formDescription/formDescription"
import FormError from "../formError/formError"
import FormLabel from "../formLabel/formLabel"

// FORM TEXTAREA
const FormTextarea = (props) => {
    return (
        <div className="m-form-textarea">
            <FormLabel text={ props.label } />
            <textarea style={{height: props.height}} />
            <FormError text={ props.error } />
            <FormDescription text={ props.description } />
        </div>
    );
}

FormTextarea.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    height: PropTypes.any,
    error: PropTypes.string,
};
  
export default FormTextarea