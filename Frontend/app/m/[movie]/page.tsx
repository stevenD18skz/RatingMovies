import React, { act } from "react";

import CarruselMovies from "../../ui/movies/CarruselMovies";
import { getMovieById, getSimilarMovies } from "../../lib/moviePort";
import { PackageOpen, Home, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Movie } from "../../types/movie";

import {
  ThumbsUp,
  Star,
  Clock,
  Calendar,
  Play,
  Film,
  TvMinimalPlay,
  Popcorn,
  MessageSquareReply,
} from "lucide-react";

interface PageProps {
  params: Promise<{ movie: string }>;
}

interface Review {
  username: string;
  date: string;
  rating: number;
  comment: string;
  helpful: number;
  replies: number;
  avatar: string;
}

interface Actor {
  name: string;
  character: string;
  urlPhoto: string;
}

export const reviews = [
  {
    username: "Monkey D. Luffy",
    date: "March 15, 2024",
    rating: 4.2,
    comment:
      "A visual masterpiece that perfectly captures the spirit of gaming culture. Spielberg's direction brings the virtual world to life in spectacular fashion.",
    helpful: 423,
    replies: 476,
    avatar:
      "https://i.pinimg.com/1200x/92/23/4a/92234a0d461079114707be651ed6ff19.jpg", // ruta ficticia
  },
  {
    username: "Aria Winters",
    date: "April 2, 2024",
    rating: 3.8,
    comment:
      "Incredible visuals and a nostalgic trip for gamers. The pacing dipped a little in the middle, but overall an amazing experience.",
    helpful: 312,
    replies: 189,
    avatar:
      "https://i.pinimg.com/736x/08/da/ce/08dace7744930a8b0ef546d9cad6c3ec.jpg",
  },
  {
    username: "Kai Tanaka",
    date: "April 20, 2024",
    rating: 4.5,
    comment:
      "One of the best movie adaptations of a novel I've ever seen. Perfect blend of action, emotion, and geek culture.",
    helpful: 540,
    replies: 298,
    avatar:
      "https://i.pinimg.com/736x/40/4a/9c/404a9c078184881d9420234f878217a5.jpg",
  },
  {
    username: "Sofia Delgado",
    date: "May 5, 2024",
    rating: 3.4,
    comment:
      "Great cast, exciting action scenes, and a fun story. Some references felt forced, but I still loved it.",
    helpful: 276,
    replies: 143,
    avatar:
      "https://i.pinimg.com/1200x/54/68/a8/5468a8e62ff5867b60407fa0dfa278d4.jpg",
  },
  {
    username: "Ethan Clarke",
    date: "May 20, 2024",
    rating: 4.6,
    comment:
      "The soundtrack and visuals blew me away. Felt like I was part of the OASIS myself!",
    helpful: 390,
    replies: 205,
    avatar:
      "https://i.pinimg.com/736x/66/0f/c4/660fc432fe037cfeb16a1c907c896389.jpg",
  },
];

export const castAndCrew = [
  {
    name: "Tye Sheridan",
    character: "Wade Watts / Parzival",
    urlPhoto:
      "https://tse4.mm.bing.net/th/id/OIP.8RogcCGpSZtH5LKe9zaX5gHaJ3?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Olivia Cooke",
    character: "Samantha Cook / Art3mis",
    urlPhoto:
      "https://tse1.mm.bing.net/th/id/OIP.qVzhNpjuGo_O5qCOecdtGAHaK2?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Ben Mendelsohn",
    character: "Nolan Sorrento",
    urlPhoto:
      "https://tse4.mm.bing.net/th/id/OIP.NFIVqNRG3SG6UscKyywknAHaJ_?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Mark Rylance",
    character: "James Halliday / Anorak",
    urlPhoto:
      "https://tse4.mm.bing.net/th/id/OIP.OMjKsfPCKq8Z_QHjZnXHUQHaLA?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Simon Pegg",
    character: "Curator",
    urlPhoto:
      "https://m.media-amazon.com/images/M/MV5BNzMwODE1NjA3OV5BMl5BanBnXkFtZTgwNTY5MzM2OTE@._V1_FMjpg_UX1000_.jpg",
  },
];

const RatingStars = ({
  rating,
  width,
  height,
}: {
  rating: number;
  width: number;
  height: number;
}) => {
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
              className={`w-${width} h-${height} text-yellow-400`}
              fill="currentColor"
              stroke="none"
            />
          );
        } else if (index === fullStars && hasPartial) {
          return (
            <span
              key={index}
              className={`relative w-${width} h-${height} inline-block`}
              style={{ minWidth: 16, minHeight: 16 }}
            >
              <Star
                className={`w-${width} h-${height} text-gray-300 absolute left-0 top-0`}
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
                  className={`w-${width} h-${height} text-yellow-400`}
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
              className={`w-${width} h-${height} text-gray-300`}
              fill="none"
              stroke="currentColor"
            />
          );
        }
      })}
    </div>
  );
};

const ReviewComment = ({ review }: { review: Review }) => {
  return (
    <div className="rating-container bg-[#1F2937] p-4 rounded-lg flex flex-col gap-4">
      {/* perfil and start */}
      <div className="rating-stars flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <img
            src={review.avatar}
            alt={review.username}
            className="w-24 h-24 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <p className="text-2xl font-bold">{review.username}</p>
            <p className="text-sm text-gray-400">{review.date}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <RatingStars rating={review.rating} width={8} height={8} />
          <p className="text-3xl italic text-[--gold]">{review.rating}</p>
          <p className="text-xl text-gray-400">/5.0</p>
        </div>
      </div>

      {/* comentario */}
      <div className="rating-text">
        <p className="text-lg text-gray-300">{review.comment}</p>
      </div>

      {/* datos extra */}
      <div className="flex items-center gap-6 text-gray-100 font-bold">
        <span className="flex items-center gap-2">
          <ThumbsUp className="w-6 h-6 text-[--gold]" />
          <p>{review.helpful}</p>
        </span>

        <span className="flex items-center gap-2">
          <MessageSquareReply className="w-6 h-6 text-[--gold]" />
          <p>{review.replies}</p>
        </span>
      </div>
    </div>
  );
};

const CastActor = ({ actor }: { actor: Actor }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={actor.urlPhoto}
        alt={`photo of ${actor.name}`}
        className="h-[20rem]"
      />
      <p className="font-bold fonr-[--white] text-xl">{actor.name}</p>
      <p className="font-gray-300 text-md">{actor.character}</p>
    </div>
  );
};

export default async function Page({ params }: PageProps) {
  // Espera a que se resuelvan los parámetros
  const resolvedParams = await params;
  const movieId = decodeURIComponent(resolvedParams.movie);

  const movie: Movie | null = await getMovieById(movieId);

  if (!movie) {
    return (
      <div className="bg-[#0F172A] min-h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4">
          {/* Icono animado */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--red-light)]/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
            <PackageOpen className="relative h-24 w-24 text-gray-400 animate-bounce" />
          </div>

          {/* Mensaje principal */}
          <h1 className="text-4xl font-bold text-white mb-4 text-center">
            Película no encontrada
          </h1>

          {/* Mensaje secundario */}
          <p className="text-gray-400 text-center mb-8 max-w-md text-lg">
            Lo sentimos, no pudimos encontrar la película "{movieId}". Verifica
            el nombre o intenta buscar otra película.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--red-light)] to-[var(--red-light)]/80 hover:from-[var(--red-light)]/90 hover:to-[var(--red-light)]/70 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              Volver al Inicio
            </Link>

            <Link
              href="/#movie-list"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Search className="w-5 h-5" />
              Explorar Películas
            </Link>
          </div>

          {/* Información adicional */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 max-w-lg w-full border border-gray-700/50">
            <h4 className="text-lg font-semibold text-white mb-4 text-center">
              🔍 ¿Qué puedes hacer?
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[var(--red-light)] rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Verifica que el nombre de la película esté escrito
                  correctamente
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Intenta buscar con el nombre original en inglés</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Explora nuestro catálogo completo de películas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Usa los filtros para encontrar películas similares</span>
              </li>
            </ul>
          </div>

          {/* Botón de retroceso */}
          <button
            onClick={() => window.history.back()}
            className="mt-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver atrás
          </button>
        </div>
      </div>
    );
  }

  const similarMovies = await getSimilarMovies(movieId);

  return (
    <div className="min-h-screen bg-[#0F172A]">
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
              <div className="  left-16 max-w-2xl gap-4 flex flex-col  items-center lg:items-start">
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
                    href={movie.trailer_url}
                    target="_blank"
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

      <div className="max-w-[1920px] mx-auto px-4 py-6">
        {/* Midle Section */}
        <div className="main-container grid grid-cols-3 gap-12">
          {/* LEFT */}
          <div className="col-span-2 gap-12 flex flex-col ">
            {/* Sypnosis */}
            <div className="flex flex-col  gap-6">
              <h3 className="text-4xl font-bold">Sypnosis</h3>
              <p className="text-gray-300 text-md">
                In the year 2045, the real world is a harsh place. The only time
                Wade Watts (Tye Sheridan) truly feels alive is when he escapes
                to the OASIS, an immersive virtual universe where most of
                humanity spends their days. In the OASIS, you can go anywhere,
                do anything, be anyone—the only limits are your own imagination.
                The OASIS was created by the brilliant and eccentric James
                Halliday (Mark Rylance), who left his immense fortune and total
                control of the OASIS to the winner of a three-part contest he
                designed to find a worthy heir. When Wade conquers the first
                challenge of the reality-bending treasure hunt, he and his
                friends—known as the High Five—are hurled into a fantastical
                universe of discovery and danger to save the OASIS and their
                world.
              </p>
            </div>

            {/* reviews */}
            <div className="container mx-auto flex flex-col gap-6">
              <h3 className="text-4xl font-bold">User Reviews</h3>
              {reviews.slice(0, 3).map((review2, idx) => (
                <ReviewComment key={idx} review={review2} />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-1 flex flex-col gap-9">
            {/* MOVIE INFO */}
            <div className="bg-[#1F2937] flex flex-col gap-4 px-6 py-8 rounded-xl">
              <h3 className="text-4xl font-bold pb-2">Movie info</h3>

              <div>
                <h4 className="  text-lg text-gray-400">Director</h4>
                <p className="text-2xl font-semibold">Steven Spielberg</p>
              </div>

              <div>
                <h4 className="  text-lg text-gray-400">Writer</h4>
                <p className="text-2xl font-semibold">Zak Penn, Ernest Cline</p>
              </div>

              <div>
                <h4 className="  text-lg text-gray-400">Distributor</h4>
                <p className="text-2xl font-semibold">Warner Bross Picture</p>
              </div>

              <div>
                <h4 className="  text-lg text-gray-400">Relase Date</h4>
                <p className="text-2xl font-semibold">March 29, 2018</p>
              </div>
            </div>

            {/* AWARDS */}
            <div className="bg-[#1F2937] flex flex-col gap-4 px-6 py-8 rounded-xl">
              <h3 className="text-4xl font-bold pb-2">Awards</h3>

              <div>
                <h4 className="  text-lg text-gray-400">
                  🏆Academy Award Nomination{" "}
                </h4>
                <p className="text-2xl font-semibold">Visual Effects</p>
              </div>

              <div>
                <h4 className="  text-lg text-gray-400">
                  🎖️BAFTA Award - Special{" "}
                </h4>
                <p className="text-2xl font-semibold">Visual Effects</p>
              </div>
            </div>

            {/* WHERE TO WATCH */}
            <div className="bg-[#1F2937] flex flex-col gap-4 px-6 py-8 rounded-xl">
              <h3 className="text-4xl font-bold pb-2">Where to watch</h3>

              <div className="flex flex-row gap-4">
                <div className="border border-yellow-700 rounded-3xl w-24 h-24 overflow-hidden">
                  <img
                    src="https://i.pinimg.com/originals/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg"
                    alt="logo netflix"
                    className=" object-fit h-full w-full"
                  />
                </div>

                <div className="border border-yellow-700 rounded-3xl w-24 h-24 overflow-hidden">
                  <img
                    src="https://tse2.mm.bing.net/th/id/OIP.EweJBEPMfuDZFtXAB2YuqQHaHa?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="logo netflix"
                    className=" object-fit h-full w-full"
                  />
                </div>

                <div className="border border-yellow-700 rounded-3xl w-24 h-24 overflow-hidden">
                  <img
                    src="https://www.trecebits.com/wp-content/uploads/2025/05/hbo-max-logo-negro.jpg.webp"
                    alt="logo netflix"
                    className=" object-fit h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cast Section */}
        <div className="px-4 py-6">
          <h3 className="text-4xl font-bold">Cast</h3>

          <div className="flex gap-6 ">
            {castAndCrew.map((actor) => (
              <CastActor key={actor.name} actor={actor} />
            ))}
          </div>
        </div>

        {/* Media Section */}
        <div className="px-4 py-6">
          <h3 className="text-4xl font-bold">Media</h3>

          <div className="flex gap-6 ">
            <div>
              <img
                src="https://www.rollingstone.com/wp-content/uploads/2018/06/readyplayerone-56b7d103-d459-4ff3-89ac-e6342be40e01.jpg"
                alt=""
                className="h-40"
              />

              <h5 className=" ">Oasis Virtual World</h5>
            </div>
          </div>
        </div>

        <CarruselMovies movies={similarMovies} />
      </div>
    </div>
  );
}
