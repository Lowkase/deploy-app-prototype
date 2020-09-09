import React from 'react'
import PropTypes from "prop-types";

// Card Group
const CardGroup = (props) => {
    return (
        <div className={`m-card-group ${ props.scheme }`}>
            { props.children }
        </div>
    );
}

CardGroup.propTypes = {
    title: PropTypes.string,
    scheme: PropTypes.string,
};

export default CardGroup