import React from 'react'

const SVG = (props) => {
    return (
        <svg viewBox="0 0 30 32" className={ props.className }>
            <g transform="translate(4 -18)" fillRule="evenodd">
                <path d="M6.268 39.207h9.181l-4.59 4.406zM21.805 20v5.619L15.499 20zM4.692 21.724l4.79 3.844 3.532 3.936v9.703H8.478v-8.163a23 23 0 00-2.4-2.863c-.86-.869-2.293-2.12-4.3-3.752l2.914-2.705z"/>
                <path d="M17.175 21.414l3.091 2.718-2.704 2.407h-2.994l-1.554-1.63zM6.684 20L.12 26.056 0 20z"/>
            </g>
        </svg>
    );
}

export default SVG