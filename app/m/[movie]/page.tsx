import {
  Star,
  Share2,
  Heart,
  Clock,
  Calendar,
  Film,
  Award,
  ThumbsUp,
  MessageSquare,
  Play,
  ChevronRight,
  Trophy,
  Monitor,
  Building2,
  Pencil,
  Clapperboard,
  ArrowUpRightIcon,
} from "lucide-react";

import { featuredMovies } from "../../lib/mockData";
import Link from "next/link";

// Rating component
const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

async function MovieDetail({ params }: { params: { movie: string } }) {
  const titleSelectMovie = decodeURIComponent(params.movie); // Decodifica el título
  const selectMovie = featuredMovies.find(
    (mo) => mo.title === titleSelectMovie
  );

  if (!selectMovie) {
    return (
      <div>
        <p>eso no existe {titleSelectMovie}</p>
      </div>
    );
  }

  const similarMovies = selectMovie.genre
    .slice(0, 1)
    .map((g) => {
      return featuredMovies.filter((m) => m.genre.includes(g));
    })[0]
    .slice(0, 6);

  console.log(similarMovies);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${selectMovie.heroposter})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative h-full flex items-end pb-16">
          <div className="flex gap-8 items-end">
            <img
              src={selectMovie.poster}
              alt="Ready Player One Poster"
              className="w-64 rounded-lg shadow-2xl"
            />
            <div className="mb-4">
              <h1 className="text-5xl font-bold mb-4">{selectMovie.title}</h1>
              <div className="flex items-center gap-6 text-lg mb-4">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" /> {selectMovie.year}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" /> {selectMovie.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Film className="w-5 h-5" /> {selectMovie.classification}
                </span>
              </div>
              <div className="flex gap-4 mb-6">
                <Rating rating={selectMovie.rating} />
                <span className="text-yellow-400">{selectMovie.rating}/5</span>
              </div>
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2">
                  <Play className="w-5 h-5" /> Watch Trailer
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center gap-2">
                  <Heart className="w-5 h-5" /> Add to Watchlist
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Genres Section */}
        <div className="flex gap-3 mb-8">
          {selectMovie.genre.map((genre) => (
            <span
              key={genre}
              className="px-4 py-1 bg-gray-800 rounded-full text-sm font-medium text-blue-400 hover:bg-gray-700 transition-colors cursor-pointer"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-8 border-b border-gray-700 mb-8">
          {["overview", "cast", "reviews", "media"].map((tab) => (
            <button
              key={tab}
              className={`pb-4 px-2 capitalize ${
                "overview" === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-400 hover:text-white"
              }`}
              //onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
              <p className="text-gray-300 leading-relaxed">
                {selectMovie.summary}
              </p>
            </section>

            {/* Reviews Section */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">User Reviews</h2>
                <div className="flex items-center  hover:text-blue-400 transition-all duration-300 hover:underline hover:scale-105">
                  <a href="/punctuation">View All</a>
                  <ArrowUpRightIcon></ArrowUpRightIcon>
                </div>
              </div>
              <div className="space-y-6">
                {selectMovie.reviews?.map((review, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={review.avatar}
                          alt={review.user}
                          className="w-12 h-12 rounded-full border-2 border-blue-500"
                        />
                        <div>
                          <h3 className="font-semibold text-lg text-gray-100">
                            {review.user}
                          </h3>
                          <p className="text-sm text-gray-400">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Rating rating={review.rating} />
                        <span className="text-sm text-yellow-400 font-medium">
                          {review.rating}.0/5
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {review.content}
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                      <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="font-medium">
                          {review.likes} Helpful
                        </span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        <span className="font-medium">
                          {review.replies} Replies
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Cast & Crew</h2>
              <div className="grid grid-cols-4 gap-4">
                {selectMovie.castMembers?.map((member, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full rounded-lg mb-2"
                    />
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-400">{member.character}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Media</h2>
              <div className="grid grid-cols-3 gap-4">
                {selectMovie.mediaGallery?.map((item, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-12 h-12" />
                    </div>
                    <p className="mt-2 text-sm text-gray-300">{item.title}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Movie Info</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mt-1">
                    <Clapperboard className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-400">Director</span>
                  </div>
                  <p>{selectMovie.director}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-1">
                    <Pencil className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-400">Writers</span>
                  </div>
                  <p>{selectMovie.writer}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-1">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-400">distributor</span>
                  </div>
                  <p>{selectMovie.distributor}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-1">
                    <Film className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-400">Release Date</span>
                  </div>
                  <p>{selectMovie.year}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Awards</h3>
              <div className="space-y-4">
                {selectMovie.Awards?.map((award, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {award.type === "trophy" ? (
                      <Trophy className="w-8 h-8 text-yellow-400" />
                    ) : (
                      <Award className="w-8 h-8 text-cyan-400" />
                    )}
                    <span>{award.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Where to Watch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {selectMovie.streamingPlatforms?.map((platform, index) => (
                  <div key={index} className="text-center">
                    <div className={`relative group cursor-pointer`}>
                      <div
                        className={`w-20 h-20 mx-auto rounded-xl bg-gradient-to-br ${platform.color} p-1`}
                      >
                        <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden">
                          <Monitor
                            className={`w-8 h-8 ${
                              platform.available
                                ? "text-white"
                                : "text-gray-600"
                            }`}
                          />
                        </div>
                      </div>
                      <p
                        className={`mt-2 text-sm ${
                          platform.available ? "text-white" : "text-gray-500"
                        }`}
                      >
                        {platform.name}
                      </p>
                      {!platform.available && (
                        <span className="block text-xs text-gray-500">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Similar Movies */}
        <section className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Similar Movies</h2>
            <Link href="/" className="text-blue-600 flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {similarMovies.map((movie, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative mb-2">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="rounded-lg w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="font-semibold group-hover:text-blue-600">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-400">{movie.year}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default MovieDetail;
