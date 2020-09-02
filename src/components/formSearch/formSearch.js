import React from 'react'
import PropTypes from "prop-types";

import SvgSearch from "../../assets/svgs/search";
import SvgReset from "../../assets/svgs/reset";

// FORM SEARCH
const FormSearch = (props) => {
    return (
        <div className="m-form-search">
            <SvgSearch />
            <input type="text" placeholder={props.placeholder} />
            <SvgReset className="reset theme-primary-color-fill-hover" />
        </div>
    );
}

FormSearch.propTypes = {
    placeholder: PropTypes.string,
};
  
export default FormSearch