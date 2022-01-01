import '@testing-library/jest-dom';

import { fireEvent, render, RenderResult } from '@testing-library/react';
import * as React from 'react';

import App from './App';

const vote = jest.fn();
const reset = jest.fn();

jest.mock('./atoms/vote', () => () => ({
  votes: {
    good: 0,
    bad: 1,
    ok: 3,
  },
  vote,
  reset,
}));

describe('<App />', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<App />);
  });

  test('displaying good votes', async () => {
    const element = await component.findByText('good 0');
    expect(element).toBeDefined();
  });

  test('displaying bad votes', async () => {
    const element = await component.findByText('bad 1');
    expect(element).toBeDefined();
  });

  test('displaying ok votes', async () => {
    const element = await component.findByText('ok 3');
    expect(element).toBeDefined();
  });

  test('click good button', async () => {
    const goodButton = await component.findByText('good');
    fireEvent.click(goodButton);
    expect(vote).toBeCalledWith('good');
  });

  test('click bad button', async () => {
    const badButton = await component.findByText('bad');
    fireEvent.click(badButton);
    expect(vote).toBeCalledWith('bad');
  });

  test('click ok button', async () => {
    const okButton = await component.findByText('ok');
    fireEvent.click(okButton);
    expect(vote).toBeCalledWith('ok');
  });

  test('click reset button', async () => {
    const resetButton = await component.findByText('reset stats');
    fireEvent.click(resetButton);
    expect(reset).toBeCalledTimes(1);
  });
});
