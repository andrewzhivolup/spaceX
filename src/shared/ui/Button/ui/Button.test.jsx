import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button renders children correctly', () => {
    // Рендерим компонент Button с произвольным текстом внутри
    render(<Button>Hello, World!</Button>);

    // Проверяем, что кнопка с текстом "Hello, World!" была отрисована на странице
    const buttonElement = screen.getByText(/Hello, World!/i);
    expect(buttonElement).toBeInTheDocument();
});

test('Button calls onClick handler when clicked', () => {
    // Создаем мок функцию для обработки клика на кнопке
    const mockClickHandler = jest.fn();

    // Рендерим компонент Button с передачей мок функции в пропсе onClick
    render(<Button onClick={mockClickHandler}>Click Me</Button>);

    // Получаем кнопку по тексту
    const buttonElement = screen.getByText(/Click Me/i);

    // Эмулируем клик на кнопке
    buttonElement.click();

    // Проверяем, что мок функция была вызвана один раз при клике на кнопку
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
});