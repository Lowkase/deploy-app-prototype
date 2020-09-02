import React from 'react'
import PropTypes from "prop-types";

import FormDescription from "../formDescription/formDescription"
import FormLabel from "../formLabel/formLabel"

// FORM RADIO
const FormRadioGroup = (props) => {
    return (
        <div className="m-form-radio-group">
            <FormLabel text={ props.label } />
            <FormDescription text={ props.description} />
            { props.children }
        </div>
    );
}

FormRadioGroup.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string
};
  
export default FormRadioGroup