import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/calculator';

const compute = () => {
  console.log('mock func');
};

test('renders Button component correctly', () => {
  const tree = renderer
    .create(<Button className="test1" text="text-test1" onClick={compute} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
