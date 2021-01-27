import React from 'react';
import './MusicButton.css';
import{Link} from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline'];

const SIZES = ['btn--medium','btn--large'];

export const MusicButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle: 
    STYLES[0];
    
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return( <Link className='btn-mobile'>
        <button className={`btn ${checkButonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type} 
        >
        {children}
        </button>
        </Link>
       
    )
};