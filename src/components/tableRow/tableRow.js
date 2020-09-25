import React from 'react'
import PropTypes from "prop-types";

import Button from "../../components/button/button"
import ButtonGroup from "../../components/buttonGroup/buttonGroup"
import FormCheckbox from "../formCheckbox/formCheckbox"
import FormCheckboxGroup from "../formCheckboxGroup/formCheckboxGroup"
import FormInput from "../formInput/formInput"
import FormRadio from "../formRadio/formRadio"
import FormRadioGroup from "../formRadioGroup/formRadioGroup"
import FormSearch from "../formSearch/formSearch"
import FormSelect from "../formSelect/formSelect"
import FormTextarea from "../formTextarea/formTextarea"
import FormTextbox from "../formTextbox/formTextbox"
import FormToggle from "../formToggle/formToggle"

import SvgDelete from "../../assets/svgs/delete";
import SvgMore from "../../assets/svgs/more";

// TABLE ROW
const TableRow = (props) => {
    const toggleEdit = (id) => { 
        let tableRow = document.getElementById(id);
        if(tableRow.className === "m-table-row") {
            tableRow.className = "m-table-row expand-row";
        } else {
            tableRow.className = "m-table-row";
        }
    }; 

    return (
        <div id={`${ props.id }`} className="m-table-row">
            <div className="main">
                <div className="primary">Name</div>
                <div>Tenant name</div>
                <div>1.3.394034</div>
                <div>2020-09-20 12:12:12 PM EST</div>
                <div className="state-success">Complete</div>
                <div className="actions">
                    <ButtonGroup
                        scheme="m-button-group-table-actions"
                    >
                        <Button
                            svg={<SvgDelete/>}
                            tabIndex={props.tabIndex}
                            text="Delete"
                            type="icon"
                        />
                        <Button
                            handleClick={() => toggleEdit(props.id)}
                            svg={<SvgMore/>}
                            tabIndex={props.tabIndex}
                            text=""
                            type="icon"
                        />
                    </ButtonGroup>
                </div>
            </div>
            <div className="edit">
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
                            isDescription = {true}
                            description = "This is a select description"
                            isError = {true}
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
            </div>
        </div>
    );
}

TableRow.propTypes = {
    id: PropTypes.string,
};
  
export default TableRow