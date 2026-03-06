import { useState } from "react";
import css from "../App/App.module.css";

import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

import type { Votes } from "../../types/votes";
import type { VoteType } from "../../types/votes";

function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  function handleVote(type: VoteType) {
    votes;
    setVotes((previous) => ({ ...previous, [type]: previous[type] + 1 }));
  }

  function resetVotes() {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const PositiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />
      {totalVotes > 0 && <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={PositiveRate}/>}
      {totalVotes === 0 && <Notification />}
    </div>
  );
}

export default App;
