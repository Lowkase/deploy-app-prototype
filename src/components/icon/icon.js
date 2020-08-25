import React from 'react'
import PropTypes from "prop-types";

// BUTTON
const Icon = (props) => {
    return (
        <div className={`m-icon m-icon-${ props.type }`}>
            { props.children }
        </div>
    );
}

Icon.propTypes = {
    handleClick: PropTypes.func,
    type: PropTypes.string,
    tabIndex: PropTypes.string,
};
  
Icon.defaultProps = {
    type: 'small',
    tabIndex: '0',
};

export default Icon