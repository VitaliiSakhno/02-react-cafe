import { useState } from "react";
import css from "../App/App.module.css";

import CafeInfo from "../CafeInfo/CafeInfo";
import type { Votes } from "../../types/votes";
import type { VoteType } from "../../types/votes";

function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  function handleVote(type: VoteType) {
    setVotes((previous) => ({ ...previous, [type]: previous[type] + 1 }));
  }

  function resetVotes() {
    return setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}

export default App;
