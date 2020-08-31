import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

import Button from "../button/button"
import ButtonGroup from "../buttonGroup/buttonGroup"
import Icon from "../icon/icon"
import Notification from "../notification/notification"

import SvgClose from "../../assets/svgs/close";

// DRAER - NOTIFICATION
// NOTE - Tell createPortal which DOM element to place the modal into (e.g. "theme")
const Drawer = (props) => props.isDrawerShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="drawer-mask"/>
        <div className="drawer-con" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className={`drawer ${ props.position }`}>
                <div className="drawer-header">
                    <div>Notifications</div>
                    <Icon className="drawer-close-button" type="small" handleClick={props.hideDrawer} data-dismiss="drawer" aria-label="Close" role="button">
                        <SvgClose />
                    </Icon>
                </div>
                <div className="drawer-content">
                    <ul className="m-notifications">
                        <li>
                            <Notification
                                title = "Default Color"
                                description = "This notificaiton has default coloring."
                                type = "default"
                            >
                            </Notification>
                        </li>
                        <li>
                            <Notification
                                title = "Info Notification"
                                description = "This notificaiton is informing the user of something."
                                type = "info"
                            >
                            </Notification>
                        </li>
                        <li>
                            <Notification
                                title = "Successful Action"
                                description = "This notificaiton shows a successful action."
                                type = "success"
                            >
                            </Notification>
                        </li>
                        <li>
                            <Notification
                                title = "Warning Notification"
                                description = "Uh oh, something is amiss"
                                type = "warning"
                            >
                            </Notification>
                        </li>
                        <li>
                            <Notification
                                title = "Error Notification"
                                description = "Something bloweded up!"
                                type = "error"
                            >
                            </Notification>
                        </li>
                        <li>
                            <Notification
                                title = "Release candidate ready"
                                description = "This is a description for a notification"
                            >
                            </Notification>
                        </li>
                        <li>
                            <Notification
                                title = "Release candidate ready"
                                description = "This is a description for a notification"
                                type = "default"
                            >
                            </Notification>
                        </li>
                    </ul>
                </div>
                <div className="drawer-footer">
                    <ButtonGroup
                        scheme="m-button-group-center-full"
                    >
                        <Button 
                            aria-label="Mark all read" 
                            className="m-button" 
                            scheme="m-button-secondary"
                            text="Mark all read"
                        >
                        </Button>
                        <Button 
                            aria-label="Archive" 
                            className="m-button" 
                            scheme="m-button-secondary"
                            text="Archive all"
                        >
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    </React.Fragment>, document.getElementById("theme")
) : null;

Drawer.propTypes = {
    isDrawerShowing: PropTypes.bool,
    hideDrawer: PropTypes.func,
    position: PropTypes.string,
};
  
Drawer.defaultProps = {
    position: 'right',
};

export default Drawer;