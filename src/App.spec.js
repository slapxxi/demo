import React from 'react';
import { render } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});
