import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
    test('renders welcome message on home page', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        const welcomeElement = screen.getByText(/Welcome to the Library Management System!/i);
        expect(welcomeElement).toBeInTheDocument();
    });

    test('navigates to Add Book page', () => {
        render(
            <MemoryRouter initialEntries={['/add']}>
                <App />
            </MemoryRouter>
        );

        const addBookElement = screen.getByText(/Add Book/i);
        expect(addBookElement).toBeInTheDocument();
    });

    test('navigates to View Books page', () => {
        render(
            <MemoryRouter initialEntries={['/view']}>
                <App />
            </MemoryRouter>
        );

        const viewBooksElement = screen.getByText(/View Books/i);
        expect(viewBooksElement).toBeInTheDocument();
    });

    test('navigates back to home page', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        const addButton = screen.getByRole('button', { name: /Add Book/i });
        fireEvent.click(addButton);

        const addBookElement = screen.getByText(/Add Book/i);
        expect(addBookElement).toBeInTheDocument();

        const homeButton = screen.getByRole('button', { name: /Home/i });
        fireEvent.click(homeButton);

        const welcomeElement = screen.getByText(/Welcome to the Library Management System!/i);
        expect(welcomeElement).toBeInTheDocument();
    });
});
