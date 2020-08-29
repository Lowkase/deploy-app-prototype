import React from 'react'
import PropTypes from "prop-types";

import Button from "../../components/button/button"
import ButtonGroup from "../../components/buttonGroup/buttonGroup"

// NOTIFICATION
const Notification = (props) => {
    return (
        <div className="m-notification">
            <div className={`type ${ props.type }`}  >
            </div>
            <div className="content">
                <div className="title">
                    { props.title }
                </div>
                <div className="description">
                    { props.description }
                </div>
                <div className="action">
                    <ButtonGroup scheme='m-button-group-card'>
                        <Button 
                            aria-label="READ" 
                            text="READ"
                            type="text"
                            >
                        </Button>
                        <Button 
                            aria-label="ARCHIVE" 
                            text="ARCHIVE"
                            type="text"
                            >
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
}

Notification.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
};
  
export default Notification