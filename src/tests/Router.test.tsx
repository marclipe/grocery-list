import { render, screen } from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom';
import { Router } from '../Router';

test('renders Router component with correct routes', async function() {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Router/>
    </MemoryRouter>
  )
  
  await screen.findByText("Home")
  await screen.findByText("Start")
  await screen.findByText("Login")
  
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Start")).toBeInTheDocument();
  expect(screen.getByText("Login")).toBeInTheDocument();
})