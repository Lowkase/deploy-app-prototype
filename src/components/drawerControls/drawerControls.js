import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

import Button from "../button/button"
import ButtonGroup from "../buttonGroup/buttonGroup"

import Link from "../link/link"

import FormCheckbox from "../formCheckbox/formCheckbox"
import FormCheckboxGroup from "../formCheckboxGroup/formCheckboxGroup"
import FormInput from "../formInput/formInput"
import FormPill from "../formPill/formPill"
import FormPillGroup from "../formPillGroup/formPillGroup"
import FormRadio from "../formRadio/formRadio"
import FormRadioGroup from "../formRadioGroup/formRadioGroup"
import FormSearch from "../formSearch/formSearch"
import FormSelect from "../formSelect/formSelect"
import FormTextarea from "../formTextarea/formTextarea"
import FormTextbox from "../formTextbox/formTextbox"
import FormToggle from "../formToggle/formToggle"

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

                    <FormInput>
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

                    <FormInput>
                        <FormRadioGroup
                            label = "radio"
                            description = "This is a radio description"
                        >
                            <FormRadio name="monsters" id="unique-id-orcs" text="Orcs" checked={true} />
                            <FormRadio name="monsters" id="unique-id-nazgul" text="Nazgul" />
                            <FormRadio name="monsters" id="unique-id-goblins" text="Goblins" />
                        </FormRadioGroup>
                    </FormInput>

                    <FormInput>
                        <FormCheckboxGroup
                            label = "checkbox"
                            description = "This is a checkbox description"
                        >
                            <FormCheckbox name="heros" id="unique-id-eagles" text="Eagles" checked={true} />
                            <FormCheckbox name="heros" id="unique-id-bombadil" text="Bombadil" />
                            <FormCheckbox name="heros" id="unique-id-beorn" text="Beorn" />
                        </FormCheckboxGroup>
                    </FormInput>

                    <FormInput>
                        <FormToggle
                            label = "toggle"
                            description = "This is a toggle description"
                        >
                        </FormToggle>
                    </FormInput>

                    <FormInput>
                        <FormSearch
                            placeholder = "Search"
                        >
                        </FormSearch>
                    </FormInput>

                    <FormPillGroup>
                        <FormPill value = "Pill" />
                        <FormPill value = "This is another pill" />
                        <FormPill value = "This is a third pill" />
                    </FormPillGroup>

                    <Link 
                        text="This is a link" />
                    <br/>
                    <Link 
                        text="This is a link underline" 
                        scheme="underline"
                    />

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