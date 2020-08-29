import React from 'react';
import ReactDOM from 'react-dom';

import Button from "../button/button"
import ButtonGroup from "../buttonGroup/buttonGroup"
import Icon from "../icon/icon"
import Notification from "../notification/notification"

import SvgClose from "../../assets/svgs/close";

// DRAER - NOTIFICATION
// NOTE - Tell createPortal which DOM element to place the modal into (e.g. "theme")
const Drawer = ({ isDrawerShowing, hideDrawer }) => isDrawerShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="drawer-mask"/>
        <div className="drawer-con" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="drawer">
                <div className="drawer-header">
                    <div>Drawer Header</div>
                    <Icon className="drawer-close-button" type="small" handleClick={hideDrawer} data-dismiss="drawer" aria-label="Close" role="button">
                        <SvgClose />
                    </Icon>
                </div>
                <div className="drawer-content">
                    Drawer Content
                </div>
                <div className="drawer-footer">
                    <ButtonGroup
                        scheme="m-button-group-right"
                    >
                        <Button 
                            aria-label="Cancel" 
                            className="m-button" 
                            scheme="m-button-secondary theme-secondary-color-background"
                            text="Cancel"
                        >
                        </Button>
                        <Button 
                            aria-label="Apply" 
                            className="m-button" 
                            scheme="theme-primary-color-background"
                            text="Apply"
                        >
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    </React.Fragment>, document.getElementById("theme")
) : null;

export default Drawer;