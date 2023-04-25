import React from "react";

function Movies() {
  const movies = [
    {
      title: "Movie 1",
      time: "1h 30m",
      genres: ["Comedy", "Drama"]
    },
    {
      title: "Movie 2",
      time: "1h 45m",
      genres: ["Action", "Adventure"]
    },
    {
      title: "Movie 3",
      time: "2h 15m",
      genres: ["Horror", "Thriller"]
    }
  ];

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;

