import React, { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const handleVote = () => {
    const newVote = [...votes];
    newVote[selected] += 1;
    setVotes(newVote);
  };

  const mostVotes = Math.max(...votes);
  const index = votes.indexOf(mostVotes);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleRandom} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      {votes[index] === 0 ? (
        <>
          <p>There is votes</p>
        </>
      ) : (
        <>
          <p>{anecdotes[index]}</p>
          <p>has {votes[index]} votes</p>
        </>
      )}
    </>
  );
};

export default App;
