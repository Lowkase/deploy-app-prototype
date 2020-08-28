import React from 'react'
import PropTypes from "prop-types";

// BUTTON GROUP
const ButtonGroup = (props) => {
    return (
        <div className={`m-button-group ${ props.scheme }`} >
                { props.children }
        </div>
    );
}

ButtonGroup.propTypes = {
    className: PropTypes.string,
};
  
ButtonGroup.defaultProps = {
    scheme: '',
};

export default ButtonGroup