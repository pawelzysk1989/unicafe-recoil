import { useCallback } from 'react';
import { atom, useRecoilState, useResetRecoilState } from 'recoil';

const initState = {
  good: 0,
  ok: 0,
  bad: 0,
};

type State = typeof initState;
type Action = keyof State;

const votesState = atom({
  key: 'votes',
  default: initState,
});

const useVotes = () => {
  const [votes, setVotes] = useRecoilState(votesState);
  const reset = useResetRecoilState(votesState);
  const vote = useCallback((action: Action) => {
    setVotes((state) => ({
      ...state,
      [action]: state[action] + 1,
    }));
  }, []);
  return {
    votes,
    vote,
    reset,
  };
};

export default useVotes;
