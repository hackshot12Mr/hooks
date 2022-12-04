import React from 'react'
import { movieData } from '../data'
import MovieCard from './MovieCard'
const MovieList = ({handleDelete , list}) => {
  // console.log(list);
  return (
    
    <div className='movie-list'>{
      
      list.map((el,i)=><MovieCard key={i} movie={el} handleDelete={handleDelete}/>)
        
      }
        
      
        </div>
  )
}

export default MovieList
