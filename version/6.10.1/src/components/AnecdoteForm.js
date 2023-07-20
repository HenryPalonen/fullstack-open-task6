import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const [newAnecdote, setNewAnecdote] = useState('');

  const handleAddAnecdote = (e) => {
    e.preventDefault();
    dispatch(addAnecdote(newAnecdote));
    setNewAnecdote('');
  };

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={handleAddAnecdote}>
        <div>
          <input
            type="text"
            value={newAnecdote}
            onChange={(e) => setNewAnecdote(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};



export default AnecdoteForm;
