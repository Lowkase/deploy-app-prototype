import React from 'react'
import PropTypes from "prop-types";

// FORM RADIO
const FormRadio = (props) => {
    return (
        <div className="m-form-radio">
            { props.checked ? (
                <input type="radio" id={props.id} name={props.name} defaultChecked />
            ) : (
                <input type="radio" id={props.id} name={props.name} />
            )}
            <label htmlFor={props.id}>{props.text}</label>
        </div>
    );
}

FormRadio.propTypes = {
    checked: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
    text: PropTypes.string,
};
  
export default FormRadio