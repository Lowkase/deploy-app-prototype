import React from 'react'

const SVG = (props) => {
    return (
        <svg viewBox="0 0 32 32"  className={ props.className }>
            <path d="M25.9 6.1a14 14 0 100 19.8 14 14 0 000-19.8zM21 19.54A1 1 0 0121 21a1 1 0 01-.71.29 1 1 0 01-.7-.29L16 17.41 12.46 21a1 1 0 01-.7.29 1 1 0 01-.71-.29 1 1 0 010-1.41L14.59 16l-3.54-3.54a1 1 0 011.41-1.41L16 14.59l3.54-3.54A1 1 0 0121 12.46L17.41 16z" />
        </svg>
    );
}

export default SVG