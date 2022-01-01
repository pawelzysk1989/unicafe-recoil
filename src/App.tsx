import { useAtom } from 'jotai';
import React from 'react';

import votesAtom from './atoms/votes';

const App = () => {
  const [votes, vote] = useAtom(votesAtom);

  return (
    <div>
      <button onClick={() => vote('good')}>good</button>
      <button onClick={() => vote('ok')}>ok</button>
      <button onClick={() => vote('bad')}>bad</button>
      <button onClick={() => vote('reset')}>reset stats</button>
      <div>good {votes.good}</div>
      <div>ok {votes.ok}</div>
      <div>bad {votes.bad}</div>
    </div>
  );
};

export default App;
