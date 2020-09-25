import React from 'react'

import Button from "../../components/button/button"
import FormSearch from "../../components/formSearch/formSearch"
import Pagination from "../../components/pagination/pagination"
import TableRow from "../../components/tableRow/tableRow"

import SvgFilter from "../../assets/svgs/filter";
import SvgNew from "../../assets/svgs/new";

// TABLE
const Table = (props) => {
    const toggleTableToolbar = () => { 
        let tableCon = document.getElementById("table-con");
        let moreFilters = document.getElementById("more-filters").getElementsByClassName("text")[0];

        if(tableCon.className === "con") {
            tableCon.className = "con expand-toolbar";
            moreFilters.textContent = "Less Filters"
        } else {
            tableCon.className = "con";
            moreFilters.textContent = "More Filters"
        }
    };    

    return (
        <div className="m-table">
            <div id="table-con" className="con">
                <div className="toolbar">
                    <div className="main">
                        <FormSearch
                            placeholder = "Filter by date"
                        />
                        <FormSearch
                            placeholder = "Filter by tenant"
                        />

                        <Button
                            handleClick = {toggleTableToolbar}
                            id="more-filters"
                            svg={<SvgFilter/>}
                            tabIndex={props.tabIndex}
                            text="More Filters"
                            type="icon"
                        />

                        <Button
                            scheme="m-button-table-new"
                            svg={<SvgNew/>}
                            tabIndex={props.tabIndex}
                            text="New"
                            type="icon"
                        />
                    </div>

                    <div className="more">
                        <FormSearch
                            placeholder = "Filter by version"
                        />
                        <FormSearch
                            placeholder = "Filter by state"
                        />
                    </div>
                </div>

                <div className="header">
                    <div>
                        <div>Name</div>
                        <div className="sort">
                            <div className="sort-up"></div>
                            <div className="sort-down"></div>
                        </div>
                    </div>
                    <div>
                        <div>Tenant</div>
                        <div className="sort">
                            <div className="sort-up"></div>
                            <div className="sort-down"></div>
                        </div>
                    </div>
                    <div>
                        <div>Version</div>
                        <div className="sort">
                            <div className="sort-up"></div>
                            <div className="sort-down"></div>
                        </div>
                    </div>
                    <div>
                        <div>Date</div>
                        <div className="sort">
                            <div className="sort-up"></div>
                            <div className="sort-down"></div>
                        </div>
                    </div>
                    <div>
                        <div>State</div>
                        <div className="sort">
                            <div className="sort-up"></div>
                            <div className="sort-down"></div>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="body">
                    <TableRow id="table-row-1" />
                    <TableRow id="table-row-2" />
                    <TableRow id="table-row-3" />
                    <TableRow id="table-row-4" />
                    <TableRow id="table-row-5" />
                    <TableRow id="table-row-6" />
                    <TableRow id="table-row-7" />
                    <TableRow id="table-row-8" />
                    <TableRow id="table-row-9" />
                    <TableRow id="table-row-10" />
                    <TableRow id="table-row-11" />
                    <TableRow id="table-row-12" />
                    <TableRow id="table-row-13" />
                    <TableRow id="table-row-14" />
                    <TableRow id="table-row-15" />
                </div>
                <div className="footer">
                    <Pagination />
                </div>
            </div>
        </div>
    );
}
  
export default Table