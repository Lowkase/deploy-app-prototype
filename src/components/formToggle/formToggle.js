import React from 'react'
import PropTypes from "prop-types";

import FormDescription from "../formDescription/formDescription"
import FormLabel from "../formLabel/formLabel"

// FORM TOGGLE
const FormToggle = (props) => {
    return (
        <div className="m-form-toggle">
            <div className="control">           
                <FormLabel text={ props.label } />
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            <FormDescription text={ props.description} />
        </div>
    );
}

FormToggle.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    error: PropTypes.string,
};
  
export default FormToggle