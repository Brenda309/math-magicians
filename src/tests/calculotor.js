import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
describe('Testing Calculator compoenent', () => {
  test('it renders all Calculator components correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Adding to numbers using fireEvent on calculator', () => {
    render(<Calculator />);
    fireEvent.click(screen.queryByText('7'));
    fireEvent.click(screen.queryByText('+'));
    fireEvent.click(screen.queryByText('7'));
    fireEvent.click(screen.queryByText('='));
    expect(screen.queryByText('14')).not.toBeNull();
  });