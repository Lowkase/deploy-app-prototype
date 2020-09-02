import React from 'react'
import PropTypes from "prop-types";

import SvgReset from "../../assets/svgs/reset";

// FORM PILL
const FormPill = (props) => {
    return (
        <div className="m-form-pill">
            <div className="con">
                <div className="value">{ props.value }</div>
                <SvgReset />
            </div>
        </div>
    );
}

FormPill.propTypes = {
    value: PropTypes.string,
};
  
export default FormPill