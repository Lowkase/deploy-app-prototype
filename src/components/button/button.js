import React from 'react'
import PropTypes from "prop-types";

// BUTTON
const Button = (props) => {
    return (
        <button 
            className={`m-button ${ props.scheme }`}    
            onClick={props.handleClick} 
            onKeyPress={props.handleClick} 
            tabIndex={props.tabIndex}
            width={props.width}
        >
            {props.text}
        </button>
    );
}

Button.propTypes = {
    handleClick: PropTypes.func,
    scheme: PropTypes.string,
    tabIndex: PropTypes.string,
    text: PropTypes.string,
    width: PropTypes.string,
};
  
Button.defaultProps = {
    tabIndex: '0',
    text: 'BUTTON',
    width: '80'
};

export default Button