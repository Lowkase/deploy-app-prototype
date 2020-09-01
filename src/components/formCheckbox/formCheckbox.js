import React from 'react'
import PropTypes from "prop-types";

// FORM CHECKBOX
const FormCheckbox = (props) => {
    return (
        <div className="m-form-checkbox">
            { props.checked ? (
                <input type="checkbox" id={props.id} name={props.name} defaultChecked />
            ) : (
                <input type="checkbox" id={props.id} name={props.name} />
            )}
            <label htmlFor={props.id}>{props.text}</label>
        </div>
    );
}

FormCheckbox.propTypes = {
    checked: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
};
  
export default FormCheckbox