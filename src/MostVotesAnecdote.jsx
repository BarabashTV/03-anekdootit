const MostVotesAnecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <p>"{anecdote}"</p>
      <p>Has {votes} votes</p>
    </div>
  );
};

export default MostVotesAnecdote;
