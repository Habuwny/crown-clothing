import React from 'react'
import './CustomButton.scss'


const CustomButton = ({children,isGooglesignIn, ...otherProps}) => (

    <button className={`${isGooglesignIn ? 'google-sign-in': ''} custom-button`} {...otherProps} >
        {children}
    </button>
    );

export default CustomButton;