import React from 'react';
import cls from './Header.module.scss';
import Logo from '../../../shared/assets/icons/SpaceX-Logo.svg';

const Header = () => {
    return (
        <div className={cls.Header}>
            <Logo className={cls.svg}/>
        </div>
    );
};

export default Header;