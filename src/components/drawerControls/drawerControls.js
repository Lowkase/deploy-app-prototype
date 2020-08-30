import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

import Button from "../button/button"
import ButtonGroup from "../buttonGroup/buttonGroup"

import Textbox from "../textbox/textbox"

import Icon from "../icon/icon"
import SvgClose from "../../assets/svgs/close";

// DRAER - NOTIFICATION
// NOTE - Tell createPortal which DOM element to place the modal into (e.g. "theme")
const Drawer = (props) => props.isDrawerShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="drawer-mask"/>
        <div className="drawer-con" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className={`drawer ${ props.position }`}>
                <div className="drawer-header">
                    <div>Controls</div>
                    <Icon className="drawer-close-button" type="small" handleClick={props.hideDrawer} data-dismiss="drawer" aria-label="Close" role="button">
                        <SvgClose />
                    </Icon>
                </div>
                <div className="drawer-content">
                    
                    <Textbox
                        label = "texbox"
                        description = "This is a textbox description"
                    >
                    </Textbox>


                </div>
                <div className="drawer-footer">
                    <ButtonGroup
                        scheme="m-button-group-center-full"
                    >
                        <Button 
                            aria-label="Cancel" 
                            className="m-button" 
                            scheme="m-button-secondary theme-secondary-color-background"
                            text="Cancel"
                        >
                        </Button>
                        <Button 
                            aria-label="Save" 
                            className="m-button" 
                            scheme="theme-primary-color-background"
                            text="Save"
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