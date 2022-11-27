import './App.css';
import {useState} from 'react'
import { movieData } from './data';
import MovieList from './Component/MovieList'
import NewMovie from './Component/NewMovie';
import Filter from './Filter';

function App() {
  const [list, setList] = useState(movieData)
  const [textFilter, setTextFilter] = useState("")
  const [ratingFilter, setRatingFilter] = useState(0)
  const handleFilterText=(y)=>setTextFilter(y)
  const handleFilterRating=(z)=>setRatingFilter(z)
  const handleDelete=(movieId)=>{
    setList(list.filter(el=>el.id!==movieId))
  }
  const handleAdd=(NewMovieTik)=>setList([...list,NewMovieTik])
  return (
    <div className="App">
      <Filter textFilter={textFilter} ratingFilter={ratingFilter} handleFilterText={handleFilterText} handleFilterRating={handleFilterRating}/>
    <MovieList Data={list.filter(el=>el.name.toLocaleLowerCase().includes(textFilter.toLocaleLowerCase())&&el.rating>=ratingFilter)} handleDelete={handleDelete}/>
    <NewMovie handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
