import React from 'react'

const Movielist = (props) => {
    const FavouriteComponent = props.FavouriteComponent
  return (
<>
   {props.movies && props.movies.map((movie,index) => (
     <div className="img-container">
     <img src={movie.Poster} alt='movie' className='img'/>
     <div  onClick = {() => props.handleFavourites(movie)} className="overlay">
        <FavouriteComponent />
     </div>
   </div>
   ))}
</>
    
  )
}

export default Movielist


