import React from 'react'
import PropTypes from "prop-types";

// INPUT
const Input = (props) => {
    return (
        <div className="m-textbox">
            <label>{ props.label }</label>
            <input type="text" />
            <div className="description">{ props.description }</div>
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
};
  
Input.defaultProps = {
    label: 'label',
    description: 'description',
};

export default Input