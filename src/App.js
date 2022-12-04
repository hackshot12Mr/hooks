import './App.css';
import {useState} from 'react'
import { movieData } from './data';
import MovieList from './Component/MovieList'
import NewMovie from './Component/NewMovie';
import Filter from './Filter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from './Component/Details'
 
function App() {
  // const [items, setItems] = useState(movieData)
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
    <NewMovie handleAdd={handleAdd}/>
    <Router>
        
        <Routes>
          <Route path="/" element={
    <MovieList  list={list.filter(el=>el.name.toLocaleLowerCase().includes(textFilter.toLocaleLowerCase())&&el.rating>=ratingFilter)} handleDelete={handleDelete} />


          }/>

            

          <Route path="/info/:id" element={<Details list={list}/>}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
