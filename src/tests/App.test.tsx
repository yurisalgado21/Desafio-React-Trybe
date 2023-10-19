import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouter } from '../utils/renderWithRouter';
import DataProvider from '../context/DataProvider';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Teste da minha página Home', () => {
  it('Teste para ver se tudo no Header retorna corretamente', () => {
    renderWithRouter(
      <DataProvider>
        <App />
      </DataProvider>,
    );
    const titleHeader = screen.getByRole('heading', {
      name: /trybe news/i,
    });
    const buttonImgMoon = screen.getByTestId('DarkModeOutlinedIcon');
    const linkFavorite = screen.getByRole('link', {
      name: /favorites/i,
    });
    expect(titleHeader).toBeInTheDocument();
    expect(buttonImgMoon).toBeInTheDocument();
    expect(linkFavorite).toBeInTheDocument();
  });
});
