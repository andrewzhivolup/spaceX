import React, {useState} from 'react';
import cls from './MissionsPage.module.scss';
import {Mission} from '../../../entities/Mission';
import {useGetMissionsQuery} from '../../../shared/api/spaceXApi';
import {Button} from '../../../shared/ui/Button';

const MissionsPage = () => {
    const {data, isLoading, error} = useGetMissionsQuery();

    const formatDateToDDMMYYYY = (dateString) => {
        const dateObj = new Date(dateString);
        const day = dateObj.getUTCDate().toString().padStart(2, '0');
        const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
        const year = dateObj.getUTCFullYear().toString();
        return `${day}.${month}.${year}`;
    };
    const modifyDataFromBase = (data) => {
        return data.map(item => ({
            missionName: item.mission_name
            , launchDate: formatDateToDDMMYYYY(item.launch_date_utc)
            , launchInformation: item.details
            , rocketPictureUrl: item.links.flickr_images[0]
        })
        );
    };

    const [latest, setLatest] = useState(true);
    const swapLatest = () => setLatest(prev => !prev);

    if (isLoading) return <h1>Загрузка...</h1>;
    if (error) return <h1>Во время получения данных произошла ошибка: {error}</h1>;
    let modifyMissions = modifyDataFromBase(data);

    modifyMissions.sort((a, b) => {
        const dateA = new Date(a.launchDate.split('.').reverse().join('-'));
        const dateB = new Date(b.launchDate.split('.').reverse().join('-'));
        return latest
            ? dateB - dateA
            : dateA - dateB;
    });

    return (
        <div className={cls.MissionsPage}>
            <Button
                onClick={swapLatest}
            >
                {latest ? 'Сначала новые' : 'Сначала старые'}
            </Button>
            {
                modifyMissions.map(mission => <Mission key={mission.missionName} data={mission}/>)
            }
        </div>
    );
};

export default MissionsPage;