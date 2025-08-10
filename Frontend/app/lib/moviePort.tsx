import { Movie } from "../types/movie";
import {
  movies,
  heroMovies,
  recentMovies,
  nextsMovies,
  genres,
} from "./mockData";

const modo = process.env.NEXT_PUBLIC_MODO || "mock";
// Función helper para obtener la URL base del API
const getApiBaseUrl = () => {
  // En el servidor (Server Components), usar la URL del servicio Docker
  if (typeof window === "undefined") {
    return "http://localhost:3001";
  }
  // En el cliente, usar localhost
  return "http://localhost:3001";
};

//
// ------------------------------------------------------------------------------------------------
//

// Función para obtener todas las películas desde el backend API
const getAllMoviesFromAPI = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${getApiBaseUrl()}/movies`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

const getAllMoviesFromMock = async (): Promise<Movie[]> => {
  return movies;
};

//
// ------------------------------------------------------------------------------------------------
//

// Función para obtener una película por ID desde el backend API
const getMovieByIdFromAPI = async (movieId: string): Promise<Movie | null> => {
  try {
    const response = await fetch(`${getApiBaseUrl()}/movies/${movieId}`);

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const movie = await response.json();
    return movie;
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
};

const getMovieByIdFromMock = async (movieId: string): Promise<Movie | null> => {
  const movie = movies.find((m: Movie) => m.title === movieId);
  return movie || null;
};

//
// ------------------------------------------------------------------------------------------------
//

// Nueva función para obtener películas similares desde el backend API
const getSimilarMoviesFromAPI = async (movieId: string): Promise<Movie[]> => {
  try {
    const response = await fetch(
      `${getApiBaseUrl()}/movies/${movieId}/similar`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const similarMovies = await response.json();
    return similarMovies;
  } catch (error) {
    console.error("Error fetching similar movies:", error);
    return [];
  }
};

const getSimilarMoviesFromMock = async (movieId: string): Promise<Movie[]> => {
  // TODO : Implementar lógica para obtener películas similares
  return movies.slice(0, 10);
};

//
// ------------------------------------------------------------------------------------------------
//

// Funcion para obtener las peliculas del hero desde el backend API
const getHeroMoviesFromAPI = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${getApiBaseUrl()}/hero-movies`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const heroMovies = await response.json();
    return heroMovies;
  } catch (error) {
    console.error("Error fetching hero movies:", error);
    return [];
  }
};

const getHeroMoviesFromMock = async (): Promise<Movie[]> => {
  return heroMovies;
};

//
// ------------------------------------------------------------------------------------------------
//

// Función para obtener las películas con mejor rating desde el backend API
const getTopMoviesFromAPI = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${getApiBaseUrl()}/top-movies`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const topMovies = await response.json();
    return topMovies;
  } catch (error) {
    console.error("Error fetching top movies:", error);
    return [];
  }
};

const getTopMoviesFromMock = async (): Promise<Movie[]> => {
  return movies
    .slice() // copiamos para no mutar el array original
    .sort((a: Movie, b: Movie) => b.rating - a.rating) // de mayor a menor
    .slice(0, 10); // top 10
};
//
// ------------------------------------------------------------------------------------------------
//

// Función para obtener las películas más recientes desde el backend API
const getRecentMoviesFromAPI = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${getApiBaseUrl()}/recent-movies`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const recentMovies = await response.json();
    return recentMovies;
  } catch (error) {
    console.error("Error fetching recent movies:", error);
    return [];
  }
};
const getRecentMoviesFromMock = async (): Promise<Movie[]> => {
  return recentMovies;
};

//
// ------------------------------------------------------------------------------------------------
//

// Función para obtener las próximas películas a estrenar desde el backend API
const getNextsMoviesFromAPI = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${getApiBaseUrl()}/nexts-movies`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const nextsMovies = await response.json();
    return nextsMovies;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    return [];
  }
};
const getNextsMoviesFromMock = async (): Promise<Movie[]> => {
  return nextsMovies;
};

//
// ------------------------------------------------------------------------------------------------
//

// Función para obtener los géneros de películas desde el backend API
const getGenresFromAPI = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${getApiBaseUrl()}/genres`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const genres = await response.json();
    return genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
};
const getGenresFromMock = async (): Promise<string[]> => {
  return genres;
};

//
// ------------------------------------------------------------------------------------------------
//

const api =
  modo === "mock"
    ? {
        getAllMovies: getAllMoviesFromMock,
        getMovieById: getMovieByIdFromMock,
        getHeroMovies: getHeroMoviesFromMock,
        getTopMovies: getTopMoviesFromMock,
        getRecentMovies: getRecentMoviesFromMock,
        getNextsMovies: getNextsMoviesFromMock,
        getGenres: getGenresFromMock,
        getSimilarMovies: getSimilarMoviesFromMock,
      }
    : {
        getAllMovies: getAllMoviesFromAPI,
        getMovieById: getMovieByIdFromAPI,
        getHeroMovies: getHeroMoviesFromAPI,
        getTopMovies: getTopMoviesFromAPI,
        getRecentMovies: getRecentMoviesFromAPI,
        getNextsMovies: getNextsMoviesFromAPI,
        getGenres: getGenresFromAPI,
        getSimilarMovies: getSimilarMoviesFromAPI,
      };

export const {
  getAllMovies,
  getMovieById,
  getHeroMovies,
  getTopMovies,
  getRecentMovies,
  getNextsMovies,
  getGenres,
  getSimilarMovies,
} = api;
