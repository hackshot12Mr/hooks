import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({Data, handleDelete}) => {
  return (
    <div className='movie-list'>{
        Data.map((el,i)=><MovieCard key={i} movie={el} handleDelete={handleDelete}/>)
        }</div>
  )
}

export default MovieList
