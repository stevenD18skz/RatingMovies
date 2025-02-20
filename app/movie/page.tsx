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

import { featuredMovies } from "../lib/mockData";
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

const selectMovie = {
  id: 2,
  title: "Ready Player One",
  rating: 4.2,
  image:
    "https://th.bing.com/th/id/OIP.c0q6NJYlJ3xK9UAj72yMFAHaLH?rs=1&pid=ImgDetMain",
  genre: ["Acción", "Aventura", "Ciencia ficción"],
  year: 2018,
  preview:
    "Cuando el creador de un popular videojuego de realidad virtual muere, lanza un concurso póstumo en el que el ganador heredará su fortuna.",
  summary:
    " In the year 2045, the real world is a harsh place. The only time Wade Watts (Tye Sheridan) truly feels alive is when he escapes to the OASIS, an immersive virtual universe where most of humanity spends their days. In the OASIS, you can go anywhere, do anything, be anyone—the only limits are your own imagination. The OASIS was created by the brilliant and eccentric James Halliday (Mark Rylance), who left his immense fortune and total control of the OASIS to the winner of a three-part contest he designed to find a worthy heir. When Wade conquers the first challenge of the reality-bending treasure hunt, he and his friends—known as the High Five—are hurled into a fantastical universe of discovery and danger to save the OASIS and their world.",
  director: "Steven Spielberg",
  writer: "Zak Penn, Ernest Cline",
  distributor: "Warner Bros. Pictures",
  duration: "140 min",
  classification: "PG-13",
  reviews: [
    {
      user: "Monke D. Luffy",
      rating: 5,
      date: "March 15, 2024",
      content:
        "A visual masterpiece that perfectly captures the spirit of gaming culture. Spielberg's direction brings the virtual world to life in spectacular fashion.",
      likes: 234,
      replies: 45,
      avatar:
        "https://i.pinimg.com/736x/75/b8/b7/75b8b7cd70cfa5c569154a646a2f716d.jpg",
    },
    {
      user: "Roronoa Zoro",
      rating: 4,
      date: "March 10, 2024",
      content:
        "While the references might be overwhelming for some, the heart of the story shines through. The OASIS is a technical achievement in visual effects.",
      likes: 186,
      replies: 28,
      avatar:
        "https://i.pinimg.com/originals/a3/2c/94/a32c947afd620ba53de48a21b29fad64.jpg",
    },
    {
      user: "Vinksmoke Sanji",
      rating: 5,
      date: "March 5, 2024",
      content:
        "An incredible journey that blends nostalgia with cutting-edge visuals. The race scene alone is worth the price of admission.",
      likes: 152,
      replies: 31,
      avatar:
        "https://i.pinimg.com/736x/16/4c/f5/164cf5c5931c4ac7ff36f43cc829f594.jpg",
    },
  ],
  castMembers: [
    {
      name: "Tye Sheridan",
      character: "Wade Watts / Parzival",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150",
    },
    {
      name: "Olivia Cooke",
      character: "Samantha Cook / Art3mis",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150",
    },
    {
      name: "Ben Mendelsohn",
      character: "Nolan Sorrento",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150",
    },
    {
      name: "Mark Rylance",
      character: "James Halliday / Anorak",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=150",
    },
  ],
  mediaGallery: [
    {
      type: "scene",
      title: "OASIS Virtual World",
      image: "https://i.ytimg.com/vi/-JgIslfYajI/maxresdefault.jpg",
    },
    {
      type: "behind",
      title: "Motion Capture Session",
      image:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200",
    },
    {
      type: "scene",
      title: "Race Scene",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200",
    },
  ],
  streamingPlatforms: [
    {
      name: "Netflix",
      logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100",
      color: "from-red-700 to-red-900",
      available: true,
    },
    {
      name: "HBO Max",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100",
      color: "from-purple-700 to-purple-900",
      available: true,
    },
    {
      name: "Amazon Prime",
      logo: "https://images.unsplash.com/photo-1553545204-4f7d339aa06a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100",
      color: "from-blue-600 to-blue-800",
      available: true,
    },
    {
      name: "Disney+",
      logo: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100",
      color: "from-blue-700 to-blue-900",
      available: false,
    },
    {
      name: "Paramount+",
      logo: "https://images.unsplash.com/photo-1627873649417-c67c5215e3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100",
      color: "from-blue-800 to-blue-950",
      available: false,
    },
  ],

  Awards: [
    {
      type: "trophy",
      name: "Academy Award Nomination - Visual Effects",
    },
    {
      type: "award",
      name: "BAFTA Award - Special Visual Effects",
    },
  ],
  similarMovies: [
    featuredMovies[0],
    featuredMovies[1],
    featuredMovies[2],
    featuredMovies[3],
    featuredMovies[4],
    featuredMovies[5],
  ],
};

function page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${selectMovie.image})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative h-full flex items-end pb-16">
          <div className="flex gap-8 items-end">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/7852c263080025.5aa583fb8d04a.jpg"
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
                {selectMovie.reviews.map((review, index) => (
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
                {selectMovie.castMembers.map((member, index) => (
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
                {selectMovie.mediaGallery.map((item, index) => (
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
                {selectMovie.Awards.map((award, index) => (
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
              <div className="grid grid-cols-3 gap-4">
                {selectMovie.streamingPlatforms.map((platform, index) => (
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
            {selectMovie.similarMovies.map((movie, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative mb-2">
                  <img
                    src={movie.image}
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

export default page;
