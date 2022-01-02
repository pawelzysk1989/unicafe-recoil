import '@testing-library/jest-dom';

import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import * as React from 'react';

import App from './App';

describe('<App />', () => {
  let component: RenderResult;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    component = render(<App />);
  });

  test('click good button', () => {
    const goodButton = screen.getByText('good');
    const goodElement = screen.getByText('good 0');
    fireEvent.click(goodButton);
    expect(goodElement.textContent).toEqual('good 1');
  });
  test('click bad button', () => {
    const badButton = screen.getByText('bad');
    const badElement = screen.getByText('bad 0');
    fireEvent.click(badButton);
    expect(badElement.textContent).toEqual('bad 1');
  });
  test('click ok button', () => {
    const okButton = screen.getByText('ok');
    const okElement = screen.getByText('ok 0');
    fireEvent.click(okButton);
    expect(okElement.textContent).toEqual('ok 1');
  });

  test('click reset stats button', () => {
    const resetButton = screen.getByText('reset stats');
    fireEvent.click(resetButton);

    screen.getByText('good 0');
    screen.getByText('bad 0');
    screen.getByText('ok 0');
  });
});
