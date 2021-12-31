import React from 'react';

import useVotes from './atoms/vote';

const App = () => {
  const { votes, vote, reset } = useVotes();

  const good = () => vote('good');
  const ok = () => vote('ok');
  const bad = () => vote('bad');

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      <div>good {votes.good}</div>
      <div>ok {votes.ok}</div>
      <div>bad {votes.bad}</div>
    </div>
  );
};

export default App;
