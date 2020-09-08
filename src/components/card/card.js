import React from 'react'
import PropTypes from "prop-types";

// Card
const Card = (props) => {
    return (
        <div className="m-card">
            <div className="title">
                { props.title}
            </div>
            <div className="con">
                { props.children }
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
};
  
export default Card