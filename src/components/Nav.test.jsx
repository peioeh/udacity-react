/**
 * @jest-environment jsdom
 */
import "@inrupt/jest-jsdom-polyfills"
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { legacy_createStore as createStore } from 'redux';
import reducer from "../reducers";
import middleware from "../middleware";

import Nav from './Nav';


const store = createStore(reducer, middleware);

test('nav_bar_snapshot_test', () => {
  render(<MemoryRouter><Provider store={store}><Nav /></Provider></MemoryRouter>);
  //screen.debug();
  expect(screen.getByRole('navigation')).toMatchSnapshot();
});



test('nav_bar_click_test', () => {
  render(<MemoryRouter><Provider store={store}><Nav /></Provider></MemoryRouter>);

  const navLink = screen.getByText('Home');
  fireEvent.click(navLink);

  expect(screen.getByText('Home')).toHaveClass('active');
});