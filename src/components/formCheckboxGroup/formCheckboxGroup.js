import React from 'react'
import PropTypes from "prop-types";

import FormDescription from "../formDescription/formDescription"
import FormLabel from "../formLabel/formLabel"

// FORM RADIO
const FormCheckboxGroup = (props) => {
    return (
        <div className="m-form-checkbox-group">
            <FormLabel text={ props.label } />
            <FormDescription text={ props.description} />
            { props.children }
        </div>
    );
}

FormCheckboxGroup.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string
};
  
export default FormCheckboxGroup