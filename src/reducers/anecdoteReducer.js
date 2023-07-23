import { createSlice } from '@reduxjs/toolkit'

// internal imports
import anecdoteService from '../services/anecdoteService'
//import { getAll, createNew, updateVotes } from '../services/anecdoteService'


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updateVoteAnecdote(state, action) {
      const votedAnecdote = action.payload;
      const { id } = votedAnecdote;
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : votedAnecdote
      )
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { updateVoteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    try {
      const anecdotes = await anecdoteService.getAll();
      dispatch(setAnecdotes(anecdotes));
    } catch (error) {
      // Handle the error here (e.g., dispatch an action to show an error message)
      console.error('Error fetching anecdotes:', error);
    }
  };
};

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew()
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const anecdoteToVote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const votedAnecdote = await anecdoteService.update(anecdoteToVote)
    dispatch(updateVoteAnecdote(votedAnecdote))
  }
}

export default anecdoteSlice.reducer