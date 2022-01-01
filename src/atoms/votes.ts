import { atomWithReducer } from 'jotai/utils';

export const initState = {
  good: 0,
  ok: 0,
  bad: 0,
};

type State = typeof initState;
type Action = 'good' | 'bad' | 'ok' | 'reset';

const reducer = (state: State, action: Action) => {
  switch (action) {
    case 'good':
      return {
        ...state,
        good: state.good + 1,
      };
    case 'bad':
      return {
        ...state,
        bad: state.bad + 1,
      };
    case 'ok':
      return {
        ...state,
        ok: state.ok + 1,
      };
    case 'reset':
      return initState;
    default:
      return state;
  }
};
const votesAtom = atomWithReducer(initState, reducer);

export default votesAtom;
