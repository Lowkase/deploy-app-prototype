import React from 'react';
import PropTypes from "prop-types";

// MAIN
const Main = (props) => {
    return (
        <main>
            { props.props }
        </main>
    );
}

Main.defaultProps = {
    props: PropTypes.any
};

export default Main