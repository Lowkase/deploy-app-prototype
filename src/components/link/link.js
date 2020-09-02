import React from 'react'
import PropTypes from "prop-types";

// LINK
const Link = (props) => {
    return (
        props.targetShow ? (
            <a className={props.scheme} href={ props.linkUrl } target={ props.targetTarget } rel="noopener noreferrer">{ props.text }</a>
        ) : (
            <a className={props.scheme} ref={ props.linkUrl } rel="noopener noreferrer">{ props.text }</a>
        )
    );
}

Link.propTypes = {
    linkUrl: PropTypes.string,
    scheme: PropTypes.string, 
    targetShow: PropTypes.bool, 
    targetTarget: PropTypes.string,
    text: PropTypes.string,
};
  
Link.defaultProps = {
    scheme: '',
    targetShow: false,
    targetTarget: '_blank',
};

export default Link