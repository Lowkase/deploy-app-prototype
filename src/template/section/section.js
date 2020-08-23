import React from 'react';
import PropTypes from "prop-types";

// MAIN
const Section = (props) => {
    return (
        <section>
            { props.props }
        </section>
    );
}

Section.defaultProps = {
    props: PropTypes.any
};

export default Section