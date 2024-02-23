import React from 'react'


const UserIcon = () => {
    // Define the common style as an object
    const commonStyle = {
        fill: 'none',
        stroke: 'black',
        strokeWidth: '2',
        strokeMiterlimit: '10',
    };

    return (
        <svg version="1.1" id="user" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 48 48" style={{enableBackground: 'new 0 0 48 48'}} xmlSpace="preserve">
            <path style={commonStyle} d="M4.89,43.22h36.22c0,0-2.22-17.33-18.11-17.33S4.89,43.22,4.89,43.22z"/>
            <circle style={commonStyle} cx="23.53" cy="13.08" r="8.64"/>
        </svg>
    );
}

const CartIcon = ( { itemCount } ) => {
    // Define styles as objects
    const hiddenStyle = { display: 'none' };
    const inlineStyle = {
        display: 'inline',
        fill: 'none',
        stroke: 'black',
        strokeWidth: '2',
        strokeMiterlimit: '10',
    };
    const fillStrokeStyle = {
        fill: 'none',
        stroke: 'black',
        strokeWidth: '2',
        strokeMiterlimit: '10',
    };
    const strokeStyle = {
        fill: 'none',
        stroke: 'black',
        strokeWidth: '2',
        strokeMiterlimit: '10',
    };
    const notificationDotStyle = {
        fill: '#FFFFFF',
        fontSize: '0.8em',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        textAnchor: 'middle',
    };

    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" style={{ enableBackground: 'new 0 0 48 48' }} xmlSpace="preserve">
            <g id="cart" style={hiddenStyle}>
                <path style={inlineStyle} d="M4.89,43.22h36.22c0,0-2.22-17.33-18.11-17.33S4.89,43.22,4.89,43.22z"/>
                <circle style={inlineStyle} cx="23.53" cy="13.08" r="8.64"/>
            </g>
            <g id="cart">
                <path style={fillStrokeStyle} d="M1,6.3h3.35c0.94,0,1.76,0.65,1.97,1.57l4.21,18.45c0.69,3.04,3.39,5.19,6.51,5.19h16.58c2.1,0,3.98-1.33,4.68-3.31l5.58-15.75H12.32"/>
                <circle style={strokeStyle} cx="16.71" cy="38.2" r="4.16"/>
                <circle style={strokeStyle} cx="32.94" cy="38.2" r="4.16"/>
            </g>
            {itemCount > 0 && (
                <g>
                    <circle cx="37.7" cy="9.5" r="9" style={{ fill: 'red' }} />
                    <text x="38" y="13" style={notificationDotStyle}>{itemCount}</text>
                </g>
            )}
        </svg>
    );
}

export  { UserIcon, CartIcon } 