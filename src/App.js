
import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Movielist from './Components/Movielist';
import MovieHeading from './Components/MovieHeading';
import Favourites from './Components/Favourites';
import Removefavourite from './Components/Removefavourite';
function App() {
  const [movies,setMovies] = useState([]);
  const [favourite,setFavourite] = useState([]);
  const [searchvalue,setSearchvalue] = useState('');
const getMovieRequest = async(searchvalue) => {
  const url = `https://www.omdbapi.com/?s=${searchvalue}&apikey=3c523f4b`;
  const response = await fetch(url);
  const result = await response.json();
  // console.log(result);
  result.Search && setMovies(result.Search)
  
}
useEffect(()=>{
  getMovieRequest(searchvalue);
 },[searchvalue])
useEffect(()=>{
  const moviefavourites = JSON.parse(localStorage.getItem('movie-app'));
  moviefavourites && setFavourite(moviefavourites);
},[])

const saveToLocalStorage = (items) => {
  localStorage.setItem('movie-app',JSON.stringify(items));
}

 const addFavourites = (movie) => {
  const newFavourites = [...favourite,movie]
  function removeDuplicates(newFavourites){
    return [...new Set(newFavourites)];
  }
  const favemov = removeDuplicates(newFavourites)
  setFavourite(favemov)
  saveToLocalStorage(favemov);
 }
 const removeFavourite = (movie) => {
  const newRemoveFavourite = favourite.filter((fav) => fav.imdbID !== movie.imdbID)
  setFavourite(newRemoveFavourite)
  saveToLocalStorage(newRemoveFavourite)
 }
  return (
  <div>
    <MovieHeading setSearch={setSearchvalue} Search={searchvalue} />
    <div className='App'>
     <Movielist movies={movies} 
      handleFavourites ={addFavourites} 
      FavouriteComponent = {Favourites}/>  
    </div>
    
    {favourite.length > 0 ? <h2>Favourites</h2> : null} 
    <div className='App'>
     <Movielist movies={favourite} 
      handleFavourites ={removeFavourite} 
      FavouriteComponent = {Removefavourite}/>  
    </div>
  </div>
  );
}

export default App;
