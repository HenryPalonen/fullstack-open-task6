import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  
  const anecdotes = useSelector(state => state.anecdotes);
  const dispatch = useDispatch()

    // make a copy of anecdotes to avoid state mutation errors
  let sortedAnecdotes = [...anecdotes].sort((a, b) => (b.votes - a.votes))

   
  const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        // Notification
        dispatch(setNotification(`voted on anecdote: ${anecdote.content}`, 5))
  }
    
    return (
        <div>
            {sortedAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>
             )}
        </div>
    )
    
}

export default AnecdoteList