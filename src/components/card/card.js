import React from 'react'
import PropTypes from "prop-types";

// Card
const Card = (props) => {
    return (
        <div className={`m-card ${ props.scheme }`}>
            { props.title ? (
                <div className="title">
                    { props.title}
                </div>
            ) : (
                null
            )}
            <div className="con">
                { props.children }
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    scheme: PropTypes.string,
};
  
export default Card