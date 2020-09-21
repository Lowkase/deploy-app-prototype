import React from 'react'

import Button from "../../components/button/button"
import ButtonGroup from "../../components/buttonGroup/buttonGroup"

import SvgFilter from "../../assets/svgs/filter";
import SvgMore from "../../assets/svgs/more";

// TABLE ROW
const TableRow = (props) => {
    return (
        <div className="row">
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
                        svg={<SvgFilter/>}
                        tabIndex={props.tabIndex}
                        text="Delete"
                        type="icon"
                    />
                    <Button
                        svg={<SvgMore/>}
                        tabIndex={props.tabIndex}
                        text=""
                        type="icon"
                    />
                </ButtonGroup>
            </div>
        </div>
    );
}
  
export default TableRow