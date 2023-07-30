import React from 'react';
import cls from './Button.module.scss';

const Button = (props) => {
    const {children, ...otherProps} = props;
    return (
        <button
            className={cls.Button}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;