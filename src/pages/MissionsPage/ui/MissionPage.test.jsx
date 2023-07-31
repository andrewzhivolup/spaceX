import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MissionsPage from './MissionsPage';

jest.mock('../../../shared/api/spaceXApi', () => ({
    useGetMissionsQuery: jest.fn(() => ({
        data: [
            {
                mission_name: 'Миссия №1',
                launch_date_utc: '2023-07-31T12:00:00Z',
                details: 'Информация о запуске',
                links: {
                    flickr_images: ['https://www.vk.com/a.png'],
                },
            },
        ],
        isLoading: false,
        error: null,
    })),
}));

describe('MissionsPage component', () => {
    test('renders loading state while fetching data', async () => {
        render(<MissionsPage />);

        expect(screen.getByText('Загрузка...')).toBeInTheDocument();

        await waitFor(() => expect(screen.queryByText('Загрузка...')).not.toBeInTheDocument());
    });

    test('renders error state if data fetching fails', async () => {
        jest.mock('../../../shared/api/spaceXApi', () => ({
            useGetMissionsQuery: jest.fn(() => ({
                data: null,
                isLoading: false,
                error: 'Sample error message',
            })),
        }));

        render(<MissionsPage />);

        expect(screen.getByText('Во время получения данных произошла ошибка: Sample error message')).toBeInTheDocument();
    });

    test('renders mission details correctly', async () => {
        render(<MissionsPage />);

        await waitFor(() => expect(screen.queryByText('Загрузка...')).not.toBeInTheDocument());

        expect(screen.getByText('Сначала новые')).toBeInTheDocument();
        expect(screen.getByText('Миссия №1')).toBeInTheDocument();
        expect(screen.getByText('31.07.2023')).toBeInTheDocument();
        expect(screen.getByText('Информация о запуске')).toBeInTheDocument();
        expect(screen.getByAltText('Изображение ракеты')).toBeInTheDocument();
    });

    test('toggles between sort mode when the button is clicked', async () => {
        render(<MissionsPage />);

        await waitFor(() => expect(screen.queryByText('Загрузка...')).not.toBeInTheDocument());

        expect(screen.getByText('Сначала новые')).toBeInTheDocument();

        screen.getByText('Сначала новые').click();

        expect(screen.getByText('Сначала старые')).toBeInTheDocument();

        screen.getByText('Сначала старые').click();

        expect(screen.getByText('Сначала новые')).toBeInTheDocument();
    });
});