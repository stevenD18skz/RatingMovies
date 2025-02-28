"use client";

import React, { useState } from "react";

import {
  Play,
  Star,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Heart,
  Share2,
  MessageSquare,
  Calendar,
  Clock,
  Film,
  Monitor,
  Search,
  LayoutGrid,
  List,
  ChevronFirst,
  ChevronLast,
  Flame,
} from "lucide-react";

import {
  featuredMovies,
  heroMovies,
  recentMovies,
  nextsMovies,
  genres,
  years,
} from "./lib/mockData";
import Link from "next/link";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [selectedYear, setSelectedYear] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 9;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroMovies.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroMovies.length) % heroMovies.length
    );
  };

  // Filter movies based on search and filters
  const filteredMovies = featuredMovies.filter((movie) => {
    const matchesSearch =
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.synopsis.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre =
      selectedGenre === "Todos" || movie.genres.includes(selectedGenre);
    const matchesYear =
      selectedYear === "all" || movie.year?.toString() === selectedYear;
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
      {/* Hero Section */}
      <section className="relative h-[85vh]">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentSlide * 100) / heroMovies.length
              }%)`,
              width: `${heroMovies.length * 100}%`,
              display: "flex",
            }}
          >
            {heroMovies.map((movie) => (
              <div
                key={movie.id}
                className="relative w-full h-full"
                style={{
                  backgroundImage: `url("https://i.pinimg.com/originals/76/71/5e/76715ecff73dbd26359a6216966eede4.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50" />
                <div className="  absolute bottom-1/4 left-16 max-w-2xl">
                  <h1 className="text-7xl font-bold mb-4 text-shadow">
                    {movie.title}
                  </h1>
                  <div className="flex items-center gap-6 text-lg mb-4">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" /> {movie.year}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5" /> {movie.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Film className="w-5 h-5" /> {movie.classification}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center">
                      <Star className="w-6 h-6 text-yellow-400" />
                      <span className="text-2xl font-bold ml-2">
                        {movie.rating}
                      </span>
                      <span className="text-gray-400 ml-1">/5.0</span>
                    </div>
                    <div className="h-6 w-px bg-gray-600" />
                    <span className="text-gray-300">Dir: {1212}</span>
                  </div>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {movie.synopsis}
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
                      <Play className="w-5 h-5" />
                      Ver Reseña
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg flex items-center gap-2 transition-colors duration-300">
                      <Heart className="w-5 h-5" />
                      Watchlist
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/75 transition-all duration-300"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 rounded-full hover:bg-black/75 transition-all duration-300"
        >
          <ChevronRight size={28} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroMovies.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-red-600 w-6"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="lg:flex lg:space-y-4 justify-between items-end mb-8">
            <div>
              <h4 className="text-red-500 font-medium mb-2">
                Nuestras Recomendaciones
              </h4>
              <h2 className="text-4xl font-bold">Películas Populares</h2>
            </div>

            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="flex items-center bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === "grid"
                      ? "bg-red-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    viewMode === "list"
                      ? "bg-red-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Filters */}
              <select
                className="bg-gray-800 text-white px-6 py-3 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
              <select
                className="bg-gray-800 text-white px-6 py-3 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="all">Todos los años</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Buscar películas por título o descripción..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 text-white px-6 py-4 pl-14 rounded-lg border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </div>

        {viewMode === "grid" ? (
          // Grid View
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedMovies.map((movie) => (
              <Link
                key={movie.id}
                href={`/m/${movie.title}`}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden transform hover:scale-[1.03] transition-all duration-500 ease-out shadow-xl hover:shadow-2xl"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent group-hover:via-gray-900/30 transition-all duration-300" />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-lg flex items-center font-semibold z-10">
                    <Star size={16} className="mr-1" />
                    {movie.rating}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{movie.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {movie.genres.map((g, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-800/80 rounded-full text-sm font-medium text-gray-300"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {movie.synopsis}
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-700">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {movie.year}
                      </span>
                      <span className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        {movie.duration}
                      </span>
                    </div>
                    <button className="text-red-500 hover:text-red-400 font-medium transition-colors duration-300">
                      Leer más
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          // List View
          <div className="space-y-6">
            {paginatedMovies.map((movie) => (
              <Link
                href="/movie"
                key={movie.id}
                className="group bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 ease-out shadow-xl hover:shadow-2xl"
              >
                <div className="flex">
                  <div className="relative w-64 overflow-hidden">
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/30 group-hover:to-gray-900/50 transition-all duration-300" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-2xl font-bold">{movie.title}</h3>
                        <div className="bg-yellow-400 text-black px-3 py-1 rounded-lg flex items-center font-semibold">
                          <Star size={16} className="mr-1" />
                          {movie.rating}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {movie.genres.map((g, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-800 rounded-full text-sm font-medium text-gray-300"
                          >
                            {g}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-300 line-clamp-2 mb-4">
                        {movie.synopsis}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {movie.year}
                        </span>
                        <span className="flex items-center gap-2 text-gray-400">
                          <Clock className="w-4 h-4" />
                          {movie.duration}
                        </span>
                        <span className="flex items-center gap-2 text-gray-400">
                          <Film className="w-4 h-4" />
                          {movie.classification}
                        </span>
                      </div>
                      <button className="text-red-500 hover:text-red-400 font-medium transition-colors duration-300">
                        Leer más
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${
                currentPage === 1
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <ChevronFirst className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg ${
                currentPage === 1
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg transition-colors duration-200 ${
                      currentPage === page
                        ? "bg-red-600 text-white"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg ${
                currentPage === totalPages
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg ${
                currentPage === totalPages
                  ? "text-gray-600 cursor-not-allowed"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <ChevronLast className="w-5 h-5" />
            </button>
          </div>
        )}
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h4 className="text-red-500 font-medium mb-2">Lo Más Destacado</h4>
            <h2 className="text-4xl font-bold">Esta Semana en el Cine</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Flame className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-bold">Estrenos Recientes</h3>
              </div>
              <div className="space-y-6">
                {recentMovies.map((movie) => (
                  <div key={movie.id} className="flex gap-4 items-start">
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold mb-1">{movie.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <Calendar className="w-4 h-4" />3 Days Ago
                      </div>
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {movie.synopsis}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold">Próximos Estrenos</h3>
              </div>
              <div className="space-y-6">
                {nextsMovies.reverse().map((movie) => (
                  <div key={movie.id} className="flex gap-4 items-start">
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold mb-1">{movie.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        Estreno: {movie.year}
                      </div>
                      <div className="flex gap-2">
                        {movie.genres.slice(0, 2).map((g, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-800 rounded-full text-xs font-medium text-gray-300"
                          >
                            {g}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
