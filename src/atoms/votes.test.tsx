import { act, renderHook } from '@testing-library/react-hooks';
import { Provider, useAtom } from 'jotai';
import React from 'react';

import votesAtom, { initState } from './votes';

const renderHookWithAtom = () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider>{children}</Provider>
  );
  return renderHook(() => useAtom(votesAtom), { wrapper });
};

describe('Votes atom', () => {
  test('should increment good votes', () => {
    const { result } = renderHookWithAtom();

    act(() => {
      result.current[1]('good');
    });

    expect(result.current[0]).toEqual({
      ...initState,
      good: 1,
    });
  });
  test('should increment bad votes', () => {
    const { result } = renderHookWithAtom();

    act(() => {
      result.current[1]('bad');
    });

    expect(result.current[0]).toEqual({
      ...initState,
      bad: 1,
    });
  });
  test('should increment ok votes', () => {
    const { result } = renderHookWithAtom();

    act(() => {
      result.current[1]('ok');
    });

    expect(result.current[0]).toEqual({
      ...initState,
      ok: 1,
    });
  });

  test('should reset votes', () => {
    const { result } = renderHookWithAtom();

    act(() => {
      result.current[1]('reset');
    });

    expect(result.current[0]).toEqual(initState);
  });
});
