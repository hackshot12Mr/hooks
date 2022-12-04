import React from 'react'
import StarRating from './StarRating'
import { Link } from 'react-router-dom'
const MovieCard = ({movie, handleDelete}) => {
  return (
    <div className='movie-card'>
        <h2>{movie.name}</h2>
        <img src={movie.image} alt="" />
        <p>{movie.rating}</p>
        <StarRating raiting={movie.rating}/>
        <p>{movie.data}</p>
       
        <div>
          <Link to={`/info/${movie.id}`}><button className='btn' >info</button></Link>
          <button className='btn' onClick={()=>handleDelete(movie.id)}>Delete</button>
        </div>
    </div>
  )
}

export default MovieCard