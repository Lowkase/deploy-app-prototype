import React from 'react'
import PropTypes from "prop-types";

// BUTTON
const Button = (props) => {
    if(props.type === "button"){
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

    if(props.type === "text"){
        return (
            <div 
                className="m-button-text theme-primary-color-hover"
                onClick={props.handleClick} 
                onKeyPress={props.handleClick} 
                role="button"
                tabIndex={props.tabIndex}
            >
                {props.text}
            </div>
        );
    }
}

Button.propTypes = {
    handleClick: PropTypes.func,
    scheme: PropTypes.string,
    tabIndex: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string,
};
  
Button.defaultProps = {
    tabIndex: '0',
    text: 'TEXT BUTTON',
    type: 'button',
    width: '80'
};

export default Button