"use client";

import { useEffect, useState } from "react"; // Hooks de React para gestionar el estado y efectos secundarios

// Datos mockeados para pruebas en la UI
import {
  heroMovies,
  recentMovies,
  nextsMovies,
  genres,
  years,
} from "./lib/mockData";

// Componentes UI para la página de inicio
import { HeroCarousel } from "./ui/Landing/HeroCarrousel";
import { Filters } from "./ui/Landing/Filters";
import { MovieGridCard } from "./ui/Landing/MovieGridCard";
import { MovieListItem } from "./ui/Landing/MovieListItem";
import { Pagination } from "./ui/Landing/Pagination";
import { FeaturedSection } from "./ui/Landing/FeaturedSection";
import SkeletonLanding from "./ui/Landing/SkeletonLanding"; // Versión de carga de la página

// Iconos
import { Flame, Calendar } from "lucide-react";

// Tipos de datos
import { Movie } from "./types/movie";

// Funciones de acceso a datos
import { getAllMovies } from "./lib/moviePort";

export default function Home() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.body.scrollHeight;
      if (scrollPosition >= totalHeight) {
        setCurrentPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setLoading(true);
    getAllMovies().then((movies) => {
      setAllMovies(movies);
      setLoading(false);
    });
  }, []);

  const moviesPerPage = 9;

  // Filter movies based on search and filters
  const filteredMovies = allMovies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.synopsis.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre =
      selectedGenre === "All" || movie.genres.includes(selectedGenre);
    const matchesYear =
      selectedYear === "All" ||
      (selectedYear === "<" && movie.releaseYear < 2020) ||
      movie.releaseYear?.toString() === selectedYear;
    return matchesSearch && matchesGenre && matchesYear;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  if (loading) {
    return <SkeletonLanding />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroCarousel moviesH={heroMovies} />

      <section className="container mx-auto px-4 py-16">
        <Filters
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          viewMode={viewMode}
          setViewMode={setViewMode}
          genres={genres}
          years={years}
        />

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedMovies.map((movie) => (
              <MovieGridCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {paginatedMovies.map((movie) => (
              <MovieListItem key={movie.id} movie={movie} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h4 className="text-red-500 font-medium mb-2">Lo Más Destacado</h4>
            <h2 className="text-4xl font-bold">Esta Semana en el Cine</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeaturedSection
              title="Estrenos Recientes"
              icon={Flame}
              movies={recentMovies}
              type="recent"
            />

            <FeaturedSection
              title="Próximos Estrenos"
              icon={Calendar}
              movies={nextsMovies}
              type="upcoming"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
