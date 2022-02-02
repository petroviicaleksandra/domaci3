//arrow function komponenta
//precica rafce
import React from "react";
import OneMovie from "./OneMovie.jsx";

const Movies = ({ movies, onAdd }) => {
  
  return (
    <div className="all-movies">
      {movies.map((movie) => (
        <OneMovie movie1={movie} key={movie.id} onAdd={onAdd} inCart={1} />
      ))}
      
    </div>
  );
};

export default Movies;
