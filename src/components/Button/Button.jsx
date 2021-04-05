import React from 'react';
import './Button.scss';

export const Button = ({className, text, action, type}) => {
    return (
        <button
            onClick={action}
            className={className}
            type={type}
        >
            {text}
        </button>
    );
};

