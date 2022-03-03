import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render user heading', async () => {
    render(<App />);

    expect(await screen.findByRole('heading', {
      name: /teachers and students/i
    })).toBeInTheDocument()
  });

  it('should render search input', async () => {
    render(<App />);

    expect(await screen.findByRole('textbox')).toBeInTheDocument()
  });

  it('should render filter button', async () => {
    render(<App />);

    expect(screen.getByRole('button', {
      name: /filter users/i
    })).toBeInTheDocument()
  });

})
