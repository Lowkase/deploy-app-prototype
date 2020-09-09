import React from 'react'
import PropTypes from "prop-types";

import SvgEmpty from "../../assets/svgs/empty";

// EMPTY
const Empty = (props) => {
    return (
        <div 
            className="m-empty"
        >
            <div className="con">
                <SvgEmpty />
                <div>{ props.text }</div>
            </div>
        </div>
    );
}
 
Empty.propTypes = {
    text: PropTypes.string,
};

export default Empty