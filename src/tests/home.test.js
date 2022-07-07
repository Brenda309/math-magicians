import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import {
  BrowserRouter,
  Router,
} from 'react-router-dom';
import App from '../App';
import Home from '../components/home';
import Navbar from '../components/navbar';

describe('Testing Home Component', () => {
  test('renders all Home subelements correctly', () => {
    const page = renderer.create(
      <BrowserRouter>
        <App>
          <Home>
            <Navbar />
          </Home>
        </App>
      </BrowserRouter>,
    ).toJSON();
    expect(page).toMatchSnapshot();
  });

  test('render home page first as index.html file', () => {
    render(<Router><App /></Router>);
    expect(screen.queryByText('Welcome to our page!')).not.toBeNull();
  });
});
