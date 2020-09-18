import React from 'react'

import Button from "../../components/button/button"
import FormSearch from "../../components/formSearch/formSearch"
import Pagination from "../../components/pagination/pagination"

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
                        onClick={props.handleClick} 
                        onKeyPress={props.handleClick} 
                        svg={<SvgFilter/>}
                        tabIndex={props.tabIndex}
                        text="More Filters"
                        type="icon"
                    />
                </div>

                <div className="header">
                    <div>Column 1</div>
                    <div>Column 2</div>
                    <div>Column 3</div>
                    <div>Column 4</div>
                </div>
                <div className="body">
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                    <div className="row">
                        <div>This is data</div>
                        <div>This is more data</div>
                        <div>2020-10-08 12:12:00</div>
                        <div>email@address.com</div>
                    </div>
                </div>
                <div className="footer">
                    <Pagination />
                </div>
            </div>
        </div>
    );
}
  
export default Table