import React from 'react'
import PropTypes from "prop-types";

import FormSelect from "../../components/formSelect/formSelect";

// PAGINATION
const Pagination = (props) => {
    return (
        <div className="m-pagination">
            <div className="results">
                999999 results
            </div>
            <div className="show">
                <div className="m-form-input-horizontal">Show:</div>
                <FormSelect>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                </FormSelect>
            </div>
            <div className="jump-to">
            <div className="m-form-input-horizontal">Jump to:</div>
                <FormSelect>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </FormSelect>
            </div>
            <div className="pages">
                <div>&#x3c;</div>
                <div className="active">1</div>
                <div>2</div>
                <div>3</div>
                <div className="between">...</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>&#x3e;</div>
            </div>
        </div>
    );
}

Pagination.propTypes = {
    handleClick: PropTypes.func,
    icon: PropTypes.any,
    scheme: PropTypes.string,
    svg: PropTypes.any,
    tabIndex: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string,
};
  
Pagination.defaultProps = {
    tabIndex: '0',
    text: 'TEXT BUTTON',
    type: 'button',
    width: '80'
};

export default Pagination