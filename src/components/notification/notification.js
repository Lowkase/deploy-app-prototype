import React from 'react'
import PropTypes from "prop-types";

// NOTIFICATION
const Notification = (props) => {
    return (
        <div className="m-notification">
            <div className="title">
                { props.title }
            </div>
            <div className="description">
                { props.description }
            </div>
            <div className="action">
                <div>READ</div>
                <div>ARCHIVE</div>
            </div>
        </div>
    );
}

Notification.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};
  
export default Notification