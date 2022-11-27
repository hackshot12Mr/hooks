import React from 'react'
import StarRating from './Component/StarRating'

const Filter = ({ratingFilter, textFilter,handleFilterRating,handleFilterText}) => {
    
  return (
    <div>
    <form >
        <input type="text" value={textFilter} onChange={e=>handleFilterText(e.target.value)} />
        <StarRating raiting={ratingFilter} handleRaiting={handleFilterRating}/>
    </form>
    </div>
  )
}

export default Filter