import { useState } from "react";
import Anecdote from "./Anecdote";
import Button from "./Button";
import MostVotesAnecdote from "./MostVotesAnecdote";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const showAnecdote = () => {
    const index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index);
  };

  const vote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    console.log(copy);
  };

  const mostVotesAnecdote = points.indexOf(Math.max(...points));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button handleClick={vote} text="Vote" />
      <Button handleClick={showAnecdote} text="Next Anecdote" />
      <hr />
      <h1>Anecdote with most votes</h1>
      <MostVotesAnecdote
        anecdote={anecdotes[mostVotesAnecdote]}
        votes={points[mostVotesAnecdote]}
      />
    </div>
  );
};

export default App;
