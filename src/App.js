import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import React from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAnecdotes = async () => {
      try {
        await dispatch(initializeAnecdotes());
      } catch (error) {
        // Handle the error here 
        console.error('Error initializing anecdotes:', error);
      }
    };

    fetchAnecdotes();
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
