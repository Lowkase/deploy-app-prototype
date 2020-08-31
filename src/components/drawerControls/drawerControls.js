import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

import Button from "../button/button"
import ButtonGroup from "../buttonGroup/buttonGroup"

import FormInput from "../formInput/formInput"
import FormSelect from "../formSelect/formSelect"
import FormTextarea from "../formTextarea/formTextarea"
import FormTextbox from "../formTextbox/formTextbox"

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
                    
                    <FormInput>
                        <FormTextbox
                            label = "texbox"
                            description = "This is a textbox description"
                            error = "This is a textbox error"
                        >
                        </FormTextbox>
                    </FormInput>

                    <FormInput>
                        <FormTextarea
                            label = "textarea"
                            description = "This is a textarea description"
                            height= '100px'
                            error = "This is a textarea error"
                        >
                        </FormTextarea>
                    </FormInput>

                    <FormInput className="last">
                        <FormSelect
                            label = "select"
                            description = "This is a select description"
                            error = "This is a select error"
                        >
                            <option value="gandalf">Gandalf</option>
                            <option value="aragorn">Aragorn</option>
                            <option value="Frodo">Frodo</option>
                            <option value="samwise">Samwise</option>
                        </FormSelect>
                    </FormInput>
                </div>
                <div className="drawer-footer">
                    <ButtonGroup
                        scheme="m-button-group-center-full"
                    >
                        <Button 
                            aria-label="Cancel" 
                            className="m-button" 
                            scheme="m-button-secondary"
                            text="Cancel"
                        >
                        </Button>
                        <Button 
                            aria-label="Save" 
                            className="m-button" 
                            scheme="m-button-primary theme-primary-color-background"
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