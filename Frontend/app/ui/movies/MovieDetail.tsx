import React from "react";
import {
  Star,
  Clock,
  Calendar,
  Play,
  Film,
  TvMinimalPlay,
  Popcorn,
} from "lucide-react";
import { Movie } from "../../types/movie";
import AccorntG from "../AccorntG";
import Link from "next/link";

interface MovieDetailProps {
  movie: Movie;
}

export const reviews = [
  {
    username: "Monkey D. Luffy",
    date: "March 15, 2024",
    rating: 9.2,
    comment:
      "A visual masterpiece that perfectly captures the spirit of gaming culture. Spielberg's direction brings the virtual world to life in spectacular fashion.",
    helpful: 423,
    replies: 476,
    avatar: "/avatars/luffy.png", // ruta ficticia
  },
  {
    username: "Aria Winters",
    date: "April 2, 2024",
    rating: 8.8,
    comment:
      "Incredible visuals and a nostalgic trip for gamers. The pacing dipped a little in the middle, but overall an amazing experience.",
    helpful: 312,
    replies: 189,
    avatar: "/avatars/aria.png",
  },
  {
    username: "Kai Tanaka",
    date: "April 20, 2024",
    rating: 9.5,
    comment:
      "One of the best movie adaptations of a novel I've ever seen. Perfect blend of action, emotion, and geek culture.",
    helpful: 540,
    replies: 298,
    avatar: "/avatars/kai.png",
  },
  {
    username: "Sofia Delgado",
    date: "May 5, 2024",
    rating: 8.4,
    comment:
      "Great cast, exciting action scenes, and a fun story. Some references felt forced, but I still loved it.",
    helpful: 276,
    replies: 143,
    avatar: "/avatars/sofia.png",
  },
  {
    username: "Ethan Clarke",
    date: "May 20, 2024",
    rating: 9.0,
    comment:
      "The soundtrack and visuals blew me away. Felt like I was part of the OASIS myself!",
    helpful: 390,
    replies: 205,
    avatar: "/avatars/ethan.png",
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasPartial = rating - fullStars > 0;
  const partialFill = hasPartial ? rating - fullStars : 0;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }, (_, index) => {
        if (index < fullStars) {
          return (
            <Star
              key={index}
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              stroke="none"
            />
          );
        } else if (index === fullStars && hasPartial) {
          return (
            <span
              key={index}
              className="relative w-4 h-4 inline-block"
              style={{ minWidth: 16, minHeight: 16 }}
            >
              <Star
                className="w-4 h-4 text-gray-300 absolute left-0 top-0"
                fill="none"
                stroke="currentColor"
              />
              <span
                className="absolute left-0 top-0 overflow-hidden"
                style={{
                  width: `${partialFill * 100}%`,
                  height: "100%",
                  display: "inline-block",
                }}
              >
                <Star
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  stroke="none"
                />
              </span>
            </span>
          );
        } else {
          return (
            <Star
              key={index}
              className="w-4 h-4 text-gray-300"
              fill="none"
              stroke="currentColor"
            />
          );
        }
      })}
    </div>
  );
};

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-screen content-end overflow-hidden bg-red-300">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${movie.hero_poster})`,
          }}
        />

        {/* Gradient Overlay  */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />

        {/* Content */}
        <div className="relative container mx-auto px-6 pb-12  ">
          <div className="">
            {/* TOP */}
            <div className="flex flex-col lg:flex-row items-center gap-8 py-16">
              <img
                src={movie.poster_url}
                alt={`${movie.title} Poster`}
                className=" w-[20rem] h-[30rem] object-cover rounded-lg shadow-2xl border-2 border-white/10"
              />

              {/* Movie Info */}
              <div className="  left-16 max-w-2xl gap-4 flex flex-col">
                <div className="flex items-center gap-4 text-lg">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-6 h-6" /> {movie.release_year}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-6 h-6" /> {movie.duration} Min
                  </span>
                  <span className="flex items-center gap-2">
                    <Film className="w-6 h-6" /> {movie.classification}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="w-8 h-8 text-[--gold]" />
                    <span className="text-2xl font-bold ml-2">
                      {movie.rating}
                    </span>
                    <span className="text-gray-400 ml-1">/5.0</span>
                  </div>
                  <div className="h-6 w-px bg-gray-800" />
                  <span className="font-semibold">
                    🏆 Best movie of the year
                  </span>
                </div>
                <h1 className="text-7xl font-bold text-shadow">
                  {movie.title}
                </h1>
                <div className="flex items-center gap-4">
                  <Link
                    href={`/m/${movie.title}`}
                    className="flex items-center gap-2 bg-[--red-light] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <TvMinimalPlay className="inline" /> Ver Mas Detalles
                  </Link>
                  <Link
                    href={movie.trailer_url}
                    className="flex items-center gap-2 bg-[--red-light] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Popcorn className="inline" /> Ver Tráiler
                  </Link>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {movie.synopsis.length > 350
                    ? movie.synopsis.slice(0, 350) + "..."
                    : movie.synopsis}
                </p>
              </div>
            </div>

            {/* Genres */}
            <div className="  flex flex-wrap gap-20 mb-6 col-span-2 items-center justify-center">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-10 py-3   text-[--white] rounded-full text-lg   "
                  style={{ backgroundColor: "rgba(255, 20, 87, 1)" }}
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        ola
      </div>
    </div>
  );
};

export default MovieDetail;
