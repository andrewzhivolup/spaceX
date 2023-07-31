import React from 'react';
import { render, screen } from '@testing-library/react';
import Mission from './Mission';

const mockData = {
    missionName: 'Миссия №1',
    launchDate: '2023-07-31',
    launchInformation: 'Информация о запуске',
    rocketPictureUrl: 'https://www.vk.com/a.png',
};

describe('Mission component', () => {
    test('renders mission details correctly', () => {
        render(<Mission data={mockData} />);
        expect(screen.getByAltText('Изображение ракеты')).toBeInTheDocument();
        expect(screen.getByText(/Название миссии: Миссия №1/i)).toBeInTheDocument();
        expect(screen.getByText(/Дата запуска: 2023-07-31/i)).toBeInTheDocument();
        expect(screen.getByText(/Информация о запуске: Информация о запуске/i)).toBeInTheDocument();
    });

    test('displays the correct rocket picture', () => {
        render(<Mission data={mockData} />);
        const rocketImage = screen.getByAltText('Изображение ракеты');
        expect(rocketImage.src).toContain('sample-rocket.jpg');
    });
});