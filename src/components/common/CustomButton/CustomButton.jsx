import React from 'react';
import './CustomButton.scss';

const CustomButton = ({children,IsCross,...otherProps}) => {
    return (
        <button className={`${IsCross ? 'cross' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
