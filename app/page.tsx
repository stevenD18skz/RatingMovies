"use client";
import { useState } from "react";
import {
  heroMovies,
  featuredMovies,
  recentMovies,
  nextsMovies,
  genres,
  years,
} from "./lib/mockData";

import { HeroCarousel } from "./ui/Landing/HeroCarrousel";
import { Filters } from "./ui/Landing/Filters";
import { MovieGridCard } from "./ui/Landing/MovieGridCard";
import { MovieListItem } from "./ui/Landing/MovieListItem";
import { Pagination } from "./ui/Landing/Pagination";
import { FeaturedSection } from "./ui/Landing/FeaturedSection";
import { Flame, Calendar } from "lucide-react";

export default function Home() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 9;

  // Filter movies based on search and filters
  const filteredMovies = featuredMovies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.synopsis.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre =
      selectedGenre === "Todos" || movie.genres.includes(selectedGenre);
    const matchesYear =
      selectedYear === "all" || movie.releaseYear?.toString() === selectedYear;
    return matchesSearch && matchesGenre && matchesYear;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

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
