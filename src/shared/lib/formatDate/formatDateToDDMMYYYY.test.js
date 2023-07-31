import { formatDateToDDMMYYYY } from './formatDateToDDMMYYYY';

describe('formatDateToDDMMYYYY', () => {
    test('test 1', () => {
        expect(formatDateToDDMMYYYY('2023-07-31T00:11:41.095Z')).toBe('31.07.2023');
    });

    test('test 2', () => {
        expect(formatDateToDDMMYYYY('2023-12-31T00:11:41.095Z')).toBe('31.12.2023');
    });

    test('test 3', () => {
        expect(formatDateToDDMMYYYY('2023-02-28T00:11:41.095Z')).toBe('28.02.2023');
    });

});
