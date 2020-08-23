import React from 'react'
import PropTypes from "prop-types";

// BUTTON
const Button = (props) => {
    return (
        <div className={`m-button ${ props.scheme }`}>
            { props.linkShow ? (
                props.targetShow ? (
                    <a href={ props.linkUrl } target={ props.targetTarget } rel="noopener noreferrer">{ props.text }</a>
                ) : (
                    <a href={ props.linkUrl } rel="noopener noreferrer">{ props.text }</a>
                )
            ) : (
            <button onClick={props.handleClick} onKeyPress={props.handleClick} tabIndex={props.tabIndex}>{props.text}</button>
            )}
        </div>
    );
}

Button.propTypes = {
    handleClick: PropTypes.func,
    linkDecoration: PropTypes.string,
    linkShow: PropTypes.bool,
    linkUrl: PropTypes.string,
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string,
    marginTop: PropTypes.string,
    scheme: PropTypes.string,
    tabIndex: PropTypes.string,
    targetShow: PropTypes.bool, 
    targetTarget: PropTypes.string,
    text: PropTypes.string,
};
  
Button.defaultProps = {
    linkDecoration: 'none',
    linkShow: false,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    tabIndex: '0',
    targetShow: false,
    targetTarget: '_blank',
};

export default Button