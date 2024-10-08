import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });

  test('renders Navbar with Home and View Books links', () => {
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();

    const viewBooksLink = screen.getByText(/View Books/i);
    expect(viewBooksLink).toBeInTheDocument();
  });

  test('renders welcome message on Home route', () => {
    const welcomeElement = screen.getByText(/Welcome To Kata-Library Management System/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('navigates to View Books page', async () => {
    const viewBooksLink = screen.getByText(/View Books/i);
    viewBooksLink.click();

    await waitFor(() => {
      const viewBooksElement = screen.getByText(/Library View/i);
      expect(viewBooksElement).toBeInTheDocument();
    });
  });
});
