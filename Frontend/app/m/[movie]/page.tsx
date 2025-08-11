import React from "react";
import {
  getMovieById,
  getSimilarMovies,
  getReviewsMovie,
  getActorByMovie,
  getMediaByMovie,
} from "../../lib/moviePort";
import {
  PackageOpen,
  Home,
  Search,
  ArrowLeft,
  CircleArrowOutUpRight,
  Play,
  ThumbsUp,
  Star,
  Clock,
  Calendar,
  Film,
  Popcorn,
  MessageSquareReply,
} from "lucide-react";
import Link from "next/link";
import { Movie } from "../../types/movie";
import { Review } from "../../types/review";
import { Actor } from "../../types/actor";
import { Media } from "../../types/media";

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

const CommentItem = ({ review }: { review: Review }) => {
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

const ActorItem = ({ actor }: { actor: Actor }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={actor.urlPhoto}
        alt={`photo of ${actor.name}`}
        className="w-[18rem] h-[28rem]"
      />
      <p className="font-bold fonr-[--white] text-xl">{actor.name}</p>
      <p className="font-gray-300 text-md">{actor.character}</p>
    </div>
  );
};

const MediaItem = ({ media }: { media: Media }) => {
  return (
    <a
      href={media.urlMedia}
      target="_blank"
      className="relative group hover:scale-110 transition-all duration-300 hover:shadow-2xl rounded-xl w-[30rem]  "
    >
      <img
        src={media.urlPoster}
        alt=""
        className="h-full w-full group-hover:brightness-110 transition-all duration-300"
      />

      <div className="bg-gradient-to-t from-black/70 to-black/30 absolute bottom-0 left-0 h-full w-full group-hover:opacity-90 transition-all duration-300"></div>

      <h5 className="absolute bottom-3 left-2 text-3xl group-hover:text-4xl transition-all duration-300 text-gray-300  ">
        {media.title}
      </h5>

      <CircleArrowOutUpRight className="absolute opacity-0 group-hover:opacity-100 text-2xl text-gray-300  transition-all duration-300 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
    </a>
  );
};

export default async function Page({ params }: PageProps) {
  // Espera a que se resuelvan los parámetros
  const resolvedParams = await params;
  const movieId = decodeURIComponent(resolvedParams.movie);

  const movie: Movie | null = await getMovieById(movieId);
  const reviewOfMovie: Review[] | null = await getReviewsMovie(movieId);
  const actorsOfMovie: Actor[] | null = await getActorByMovie(movieId);
  const mediaOfMovie: Media[] | null = await getMediaByMovie(movieId);

  if (!movie || !reviewOfMovie || !actorsOfMovie || !mediaOfMovie) {
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
            Lo sentimos, no pudimos encontrar la película &ldquo;{movieId}
            &rdquo;. Verifica el nombre o intenta buscar otra película.
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

  console.log(movieId);
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
              <div className="flex justify-between items-center">
                <h3 className="text-4xl font-bold">User Reviews</h3>
                <a
                  href="https://www.imdb.com/es/title/tt1677720/ratings/?ref_=tt_ov_rat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500 hover:text-blue-700 transition-colors"
                >
                  View more
                </a>
              </div>

              {reviewOfMovie.slice(0, 3).map((review, idx) => (
                <CommentItem key={idx} review={review} />
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
                <a
                  href="https://www.netflix.com/co/title/81696722"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-yellow-700 rounded-3xl w-24 h-24 overflow-hidden"
                >
                  <img
                    src="https://i.pinimg.com/originals/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg"
                    alt="logo netflix"
                    className=" object-cover h-full w-full"
                  />
                </a>

                <a
                  href="https://www.primevideo.com/region/na/detail?gti=amzn1.dv.gti.78b680ff-76d5-f11d-300c-65263d116eaa&irclickid=a9db9612N764011f0b0eed5a42d545d6&ref=dvm_ass_acm_xx_mf_s_imp_a9db9612N764011f0b0eed5a42d545d6&irgwc=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-yellow-700 rounded-3xl w-24 h-24 overflow-hidden"
                >
                  <img
                    src="https://tse2.mm.bing.net/th/id/OIP.EweJBEPMfuDZFtXAB2YuqQHaHa?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="logo netflix"
                    className=" object-cover h-full w-full"
                  />
                </a>

                <a
                  href="https://www.hbomax.com/co/es/movies/ready-player-one-comienza-el-juego/09d36d79-eff3-4c2d-9300-bbd8ab11eaa5?utm_source=universal_search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-yellow-700 rounded-3xl w-24 h-24 overflow-hidden"
                >
                  <img
                    src="https://www.trecebits.com/wp-content/uploads/2025/05/hbo-max-logo-negro.jpg.webp"
                    alt="logo netflix"
                    className=" object-cover h-full w-full"
                  />
                </a>
                <a
                  href="https://tv.apple.com/co/movie/ready-player-one-comienza-el-juego/umc.cmc.295lpojxtonf6dqc4za2i97lr?playableId=tvs.sbd.9001%3A1354248992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-yellow-700 rounded-3xl w-24 h-24 overflow-hidden"
                >
                  <img
                    src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/03/apple-tv-logo-2661899.jpg?tf=3840x"
                    alt="logo netflix"
                    className=" object-cover h-full w-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cast Section */}
        <div className="px-4 py-6">
          <h3 className="text-4xl font-bold">Cast</h3>

          <div className="flex gap-6">
            {actorsOfMovie.map((actor) => (
              <ActorItem key={actor.name} actor={actor} />
            ))}
          </div>
        </div>

        {/* Media Section */}
        <div className="px-4 py-6">
          <h3 className="text-4xl font-bold">Media</h3>

          <div className="flex gap-8 ">
            {mediaOfMovie.map((media) => (
              <MediaItem key={media.title} media={media} />
            ))}
          </div>
        </div>

        <section className="  mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Similar Movies</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4  ">
            {similarMovies.map((movie) => (
              <Link
                href={`/m/${movie.title}`}
                key={movie.id}
                className="group cursor-pointer transform hover:scale-105 transition-transform"
              >
                <div className="relative aspect-[2/3] mb-2 rounded-lg overflow-hidden">
                  <img
                    src={movie.poster_url}
                    alt={`${movie.title} poster`}
                    //fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 900px) 60vw, (max-width: 1200px) 53vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold truncate hover:text-blue-600">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-400">{movie.release_year}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

interface PageProps {
  params: Promise<{ movie: string }>;
}
