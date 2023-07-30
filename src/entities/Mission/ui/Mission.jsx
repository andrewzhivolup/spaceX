import React from 'react';
import cls from './Mission.module.scss';

const Mission = (props) => {
    const {
        data
    } = props;

    const {
        missionName
        , launchDate
        , launchInformation
        , rocketPictureUrl
    } = data;

    return (
        <div className={cls.Mission}>
            <img src={rocketPictureUrl} alt={'Изображение ракеты'}/>
            <p>Название миссии: {missionName}</p>
            <p>Дата запуска: {launchDate}</p>
            <p>Информация о запуске: {launchInformation}</p>
        </div>
    );
};

export default Mission;