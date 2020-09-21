import React from 'react'

import Button from "../../components/button/button"
import FormSearch from "../../components/formSearch/formSearch"
import Pagination from "../../components/pagination/pagination"
import TableRow from "../../components/tableRow/tableRow"

import SvgFilter from "../../assets/svgs/filter";

// TABLE
const Table = (props) => {
    return (
        <div className="m-table">
            <div className="con">
                <div className="toolbar">
                    <FormSearch
                        placeholder = "Filter by release date"
                    />
                    <FormSearch
                        placeholder = "Filter by tenant"
                    />

                    <Button
                        svg={<SvgFilter/>}
                        tabIndex={props.tabIndex}
                        text="More Filters"
                        type="icon"
                    />
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
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                    <TableRow />
                </div>
                <div className="footer">
                    <Pagination />
                </div>
            </div>
        </div>
    );
}
  
export default Table