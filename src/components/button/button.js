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

    if(props.type === "icon"){
        return (
            <div 
                className={`m-button m-button-icon ${ props.scheme }`}
                id={props.id} 
                onClick={props.handleClick} 
                onKeyPress={props.handleClick} 
                role="button"
                tabIndex={props.tabIndex}
            >
                {props.svg}
                <div className="text">{props.text}</div>
            </div>
        );
    }
}

Button.propTypes = {
    handleClick: PropTypes.func,
    icon: PropTypes.any,
    id: PropTypes.string,
    scheme: PropTypes.string,
    svg: PropTypes.any,
    tabIndex: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string,
};
  
Button.defaultProps = {
    scheme: '',
    tabIndex: '0',
    text: 'TEXT BUTTON',
    type: 'button',
    width: '80'
};

export default Button