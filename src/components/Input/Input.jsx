import React from 'react';
import './Input.scss';

export const Input = ({value, action, type, className, placeholder}) => {
    return (
        <input
            value={value}
            type={type}
            onChange={action}
            className={className}
            placeholder={placeholder}
        />
    );
};
