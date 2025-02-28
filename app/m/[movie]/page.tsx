import React from "react";

import MovieDetail from "../../ui/movies/MovieDetail";
import CarruselMovies from "../../ui/CarruselMovies";
import { featuredMovies } from "../../lib/mockData";
import { Movie } from "../../types/movie";

interface PageParams {
  params: { movie: string };
}

const getMovieByTitle = async (title: string): Promise<Movie | undefined> => {
  // Simulación de llamada API con retraso
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return featuredMovies.find((movie) => movie.title === title);
};

const getSimilarMovies = (selectedMovie: Movie): Movie[] => {
  if (!selectedMovie.genres.length) return [];

  const [primaryGenre] = selectedMovie.genres;
  return featuredMovies
    .filter(
      (movie) =>
        movie.id !== selectedMovie.id && movie.genres.includes(primaryGenre)
    )
    .slice(0, 10);
};

const MoviePage = async ({ params }: PageParams) => {
  const decodedTitle = decodeURIComponent(params.movie);
  const selectedMovie = await getMovieByTitle(decodedTitle);

  if (!selectedMovie) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold">Movie not found</h2>
      </div>
    );
  }

  const similarMovies = getSimilarMovies(selectedMovie);

  return (
    <div className="  ">
      <MovieDetail movie={selectedMovie} />
      <CarruselMovies movies={similarMovies} />
    </div>
  );
};

export default MoviePage;
