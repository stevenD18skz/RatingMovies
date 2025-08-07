const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

// Importar los mocks
const {
  movies,
  heroMovies,
  recentMovies,
  nextsMovies,
  genres,
} = require("./mockData.cjs");

app.use(cors());
app.use(express.json());

// Endpoints usando los mocks

app.get("/movies", async (req, res) => {
  try {
    const allMovies = movies;
    res.json(allMovies);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
      errorMesage: error.message,
    });
  }
});

app.get("/movies/:title", async (req, res) => {
  try {
    const movie = movies.find((m) => m.title === req.params.title);

    if (movie) res.json(movie);
    else res.status(404).json({ error: "Movie not found" });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.get("/movies/:title/similar", async (req, res) => {
  try {
    const similarMovies = movies
      .filter((m) => m.title !== req.params.title)
      .slice(0, 5);
    res.json(similarMovies);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.get("/movies/genre/:genre", async (req, res) => {
  try {
    const movies = movies.filter((m) => m.genres.includes(req.params.genre));
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.get("/search", async (req, res) => {
  try {
    const { q } = req.query;
    if (!q)
      return res.status(400).json({ error: "Query parameter 'q' is required" });
    const movies = movies.filter((m) =>
      m.title.toLowerCase().includes(q.toLowerCase())
    );
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.get("/hero-movies", async (req, res) => {
  try {
    const allheroMovies = heroMovies;
    res.json(allheroMovies);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.get("/top-movies", async (req, res) => {
  try {
    const topMovies = movies.slice(0, 10);
    res.json(topMovies);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
      errorMesage: error.message,
    });
  }
});

app.get("/recent-movies", async (req, res) => {
  try {
    const movies = recentMovies;
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.get("/nexts-movies", async (req, res) => {
  try {
    const movies = nextsMovies;
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.get("/genres", async (req, res) => {
  try {
    const allGenres = genres;
    res.json(allGenres);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World (mock)");
});

app.listen(PORT, () => {
  console.log(`Mock Movies service running on port ${PORT}`);
});
