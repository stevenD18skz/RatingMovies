const featuredMovies = [
  {
    id: 1,
    title: "Poor Things",
    releaseDate: "December 8, 2023",
    releaseYear: 2012,
    duration: 141,
    classification: "R",
    rating: 4.5,
    genres: ["Drama", "Sci-Fi", "Fantasy"],
    synopsis:
      "A young woman, Bella Baxter, is resurrected by a brilliant scientist and embarks on an odyssey of self-discovery.",
    posterUrl:
      "https://i.pinimg.com/originals/76/71/5e/76715ecff73dbd26359a6216966eede4.jpg",
    heroposter:
      "https://images.bauerhosting.com/empire/2023/07/poor-things.jpg?ar=16:9&fit=crop&crop=top&auto=format&w=1440&q=80",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 2,
    title: "Ready Player One",
    releaseDate: "March 29, 2018",
    releaseYear: 2012,
    duration: 140,
    classification: "PG-13",
    rating: 4.0,
    genres: ["Action", "Sci-Fi", "Adventure", "Fantasy", "Thriller"],
    synopsis:
      "In the year 2045, the real world is a harsh place. The only time Wade Watts truly feels alive is when he escapes to the OASIS...",
    posterUrl:
      "https://th.bing.com/th/id/R.1717cf334c3df9d3c5ad5d7e5955353f?rik=lEKm4V%2f4cTKFlw&riu=http%3a%2f%2fwww.slashfilm.com%2fwp%2fwp-content%2fimages%2freadyplayerone-teaserposter-full.jpg&ehk=XrWEx2BP3LXqI%2fiVCLPsPfTCru1fRb2G%2bR06fahMfkw%3d&risl=&pid=ImgRaw&r=0",
    heroposter:
      "https://th.bing.com/th/id/R.1717cf334c3df9d3c5ad5d7e5955353f?rik=lEKm4V%2f4cTKFlw&riu=http%3a%2f%2fwww.slashfilm.com%2fwp%2fwp-content%2fimages%2freadyplayerone-teaserposter-full.jpg&ehk=XrWEx2BP3LXqI%2fiVCLPsPfTCru1fRb2G%2bR06fahMfkw%3d&risl=&pid=ImgRaw&r=0",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 3,
    title: "Baby Driver",
    releaseDate: "June 28, 2017",
    releaseYear: 2012,
    duration: 113,
    classification: "R",
    rating: 4.3,
    genres: ["Action", "Crime", "Music", "Thriller"],
    synopsis:
      "A young getaway driver relies on his passion for music to be the best in the game. When he meets the girl of his dreams...",
    posterUrl:
      "https://th.bing.com/th/id/R.bb2c781b3b67dd18c6a0465c25364127?rik=kfMH%2fNJtuK801w&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2017%2f05%2fbaby-driver-final-poster.jpeg&ehk=h3hnclIw44KJLItVE5ZQpIwh8goW460G51FTku8yK1s%3d&risl=&pid=ImgRaw&r=0",
    heroposter:
      "https://th.bing.com/th/id/R.bb2c781b3b67dd18c6a0465c25364127?rik=kfMH%2fNJtuK801w&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2017%2f05%2fbaby-driver-final-poster.jpeg&ehk=h3hnclIw44KJLItVE5ZQpIwh8goW460G51FTku8yK1s%3d&risl=&pid=ImgRaw&r=0",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 4,
    title: "Mad Max: Fury Road",
    releaseDate: "May 15, 2015",
    releaseYear: 2012,
    duration: 120,
    classification: "R",
    rating: 4.6,
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland...",
    posterUrl:
      "https://posterspy.com/wp-content/uploads/2015/03/madmax_2_small.jpg",
    heroposter:
      "https://posterspy.com/wp-content/uploads/2015/03/madmax_2_small.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 5,
    title: "Tron",
    releaseDate: "July 9, 1982",
    releaseYear: 2012,
    duration: 96,
    classification: "PG",
    rating: 3.8,
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis:
      "A computer hacker is abducted into a digital world and forced to participate in gladiatorial games.",
    posterUrl:
      "https://tse1.mm.bing.net/th/id/OIP.46aplvbkj6wxXVJlV4k4jgHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    heroposter:
      "https://tse1.mm.bing.net/th/id/OIP.46aplvbkj6wxXVJlV4k4jgHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 6,
    title: "Mi Vecino Totoro",
    releaseDate: "April 16, 1988",
    releaseYear: 1988,
    duration: 86,
    classification: "G",
    rating: 4.8,
    genres: ["Animation", "Family", "Fantasy"],
    synopsis:
      "Two young girls move to the countryside and encounter a mystical forest spirit named Totoro.",
    posterUrl:
      "https://th.bing.com/th/id/R.548566e8cf45dc11b59d13c12d5dbec0?rik=aeeJkyabBBcO%2fQ&riu=http%3a%2f%2fwww.cartelesmix.com%2fcarteles%2festrenos2009%2fmivecinototoro8803.jpg&ehk=5ZPAAdyJ%2bdhHskc94c2nB596NcISHCCWPnAWMuJZyb4%3d&risl=&pid=ImgRaw&r=0",
    heroposter:
      "https://th.bing.com/th/id/R.548566e8cf45dc11b59d13c12d5dbec0?rik=aeeJkyabBBcO%2fQ&riu=http%3a%2f%2fwww.cartelesmix.com%2fcarteles%2festrenos2009%2fmivecinototoro8803.jpg&ehk=5ZPAAdyJ%2bdhHskc94c2nB596NcISHCCWPnAWMuJZyb4%3d&risl=&pid=ImgRaw&r=0",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 7,
    title: "Dragon Ball Super: Broly",
    releaseDate: "December 14, 2018",
    releaseYear: 2018,
    duration: 100,
    classification: "PG",
    rating: 4.4,
    genres: ["Animation", "Action", "Fantasy", "Sci-Fi"],
    synopsis: "Goku and Vegeta face off against the legendary Saiyan Broly.",
    posterUrl:
      "https://i.pinimg.com/originals/c5/5b/12/c55b124ddca12ac0165f57c90a09acba.jpg",
    heroposter:
      "https://i.pinimg.com/originals/c5/5b/12/c55b124ddca12ac0165f57c90a09acba.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 8,
    title: "One Piece Film: Red",
    releaseDate: "August 6, 2022",
    releaseYear: 2022,
    duration: 115,
    classification: "PG-13",
    rating: 4.3,
    genres: ["Animation", "Action", "Adventure", "Fantasy"],
    synopsis:
      "Luffy and his crew attend a concert by Uta, a world-famous singer with a hidden past.",
    posterUrl:
      "https://th.bing.com/th/id/R.3fb65148f9520a8aa183096570328e76?rik=gn42A1VyPhVl2w&pid=ImgRaw&r=0",
    heroposter:
      "https://th.bing.com/th/id/R.3fb65148f9520a8aa183096570328e76?rik=gn42A1VyPhVl2w&pid=ImgRaw&r=0",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 9,
    title: "Los Ilusionistas",
    releaseDate: "May 31, 2013",
    releaseYear: 2013,
    duration: 115,
    classification: "PG-13",
    rating: 3.8,
    genres: ["Crime", "Mystery", "Thriller"], // Traducido de "Crimen", "Misterio", "Suspenso"
    synopsis:
      "Un equipo de ilusionistas realiza robos bancarios durante sus espectáculos y los fondos se entregan a la audiencia.",
    posterUrl:
      "https://th.bing.com/th/id/OIP.3n3N603r2lC2wsy5uvt6MAHaLH?rs=1&pid=ImgDetMain",
    heroposter:
      "https://th.bing.com/th/id/OIP.3n3N603r2lC2wsy5uvt6MAHaLH?rs=1&pid=ImgDetMain",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 10,
    title: "Kingsman: El Círculo Dorado",
    releaseDate: "September 20, 2017",
    releaseYear: 2017,
    duration: 141,
    classification: "R",
    rating: 3.5,
    genres: ["Action", "Adventure", "Comedy"], // Traducido de "Acción", "Aventura", "Comedia"
    synopsis:
      "Cuando el cuartel general de Kingsman es destruido, los agentes viajan a Estados Unidos para unirse a su organización hermana, Statesman, para detener a un enemigo común.",
    posterUrl:
      "https://th.bing.com/th/id/R.51305ff156a3373d563c1093e4bdf0c8?rik=UlaRqwgY2TgNvg&pid=ImgRaw&r=0",
    heroposter:
      "https://th.bing.com/th/id/R.51305ff156a3373d563c1093e4bdf0c8?rik=UlaRqwgY2TgNvg&pid=ImgRaw&r=0",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 11,
    title: "Cómo Entrenar a tu Dragón",
    releaseDate: "March 26, 2010",
    releaseYear: 2010,
    duration: 98,
    classification: "PG",
    rating: 4.5,
    genres: ["Animation", "Adventure", "Family"], // Traducido de "Animación", "Aventura", "Familiar"
    synopsis:
      "Un joven vikingo que aspira a cazar dragones se hace amigo de un dragón legendario y aprende que hay más en las criaturas de lo que pensaba.",
    posterUrl:
      "https://tse4.mm.bing.net/th/id/OIP.EGENDUFtDhhdz9vM0qJNFgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    heroposter:
      "https://tse4.mm.bing.net/th/id/OIP.EGENDUFtDhhdz9vM0qJNFgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 12,
    title: "Godzilla",
    releaseDate: "May 14, 2014",
    releaseYear: 2014,
    duration: 123,
    classification: "PG-13",
    rating: 3.7,
    genres: ["Action", "Adventure", "Sci-Fi"], // Traducido de "Acción", "Aventura", "Ciencia ficción"
    synopsis:
      "La humanidad lucha por sobrevivir cuando monstruos gigantes, conocidos como MUTOs, se levantan para desafiar el dominio de Godzilla.",
    posterUrl:
      "https://image.tmdb.org/t/p/original/1t0FcqSsBs51PDhDkFd7EiEytU6.jpg",
    heroposter:
      "https://image.tmdb.org/t/p/original/1t0FcqSsBs51PDhDkFd7EiEytU6.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 13,
    title: "John Wick",
    releaseDate: "October 24, 2014",
    releaseYear: 2014,
    duration: 101,
    classification: "R",
    rating: 4.0,
    genres: ["Action", "Thriller"], // Traducido de "Acción", "Suspenso"
    synopsis:
      "Un ex asesino busca venganza contra los gánsteres que mataron a su perro, un regalo de su difunta esposa.",
    posterUrl:
      "https://th.bing.com/th/id/OIP.bacb4gLuvXQpcAFpO7Q9hgHaLH?rs=1&pid=ImgDetMain",
    heroposter:
      "https://th.bing.com/th/id/OIP.bacb4gLuvXQpcAFpO7Q9hgHaLH?rs=1&pid=ImgDetMain",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 14,
    title: "Hombres de Negro",
    releaseDate: "July 2, 1997",
    releaseYear: 1997,
    duration: 98,
    classification: "PG-13",
    rating: 4.1,
    genres: ["Action", "Adventure", "Comedy"], // Traducido de "Acción", "Aventura", "Comedia"
    synopsis:
      "Dos agentes de una organización secreta que supervisa la actividad extraterrestre en la Tierra deben evitar que un terrorista alienígena destruya el planeta.",
    posterUrl:
      "https://tse4.mm.bing.net/th/id/OIP.xyugdGOFp8FZRSYmkhp0vAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    heroposter:
      "https://tse4.mm.bing.net/th/id/OIP.xyugdGOFp8FZRSYmkhp0vAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 15,
    title: "Watchmen",
    releaseDate: "March 6, 2009",
    releaseYear: 2009,
    duration: 163,
    classification: "R",
    rating: 4.2,
    genres: ["Action", "Drama", "Mystery"], // Traducido de "Acción", "Drama", "Misterio"
    synopsis:
      "En una realidad alternativa de 1985, un grupo de superhéroes retirados investiga el asesinato de uno de sus miembros y descubre una conspiración que podría cambiar el curso de la historia.",
    posterUrl:
      "https://tse2.mm.bing.net/th/id/OIP.pfJqWFqv6PHuborNFuLpygHaLb?rs=1&pid=ImgDetMain&o=7&rm=3",
    heroposter:
      "https://tse2.mm.bing.net/th/id/OIP.pfJqWFqv6PHuborNFuLpygHaLb?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 16,
    title: "X-Men",
    releaseDate: "July 14, 2000",
    releaseYear: 2000,
    duration: 104,
    classification: "PG-13",
    rating: 3.9,
    genres: ["Action", "Adventure", "Sci-Fi"], // Traducido de "Acción", "Aventura", "Ciencia ficción"
    synopsis:
      "Un grupo de mutantes con habilidades extraordinarias lucha por proteger a la humanidad de una amenaza mutante radical.",
    posterUrl:
      "https://th.bing.com/th/id/R.70a2f9351cdd6a0fc91ed5dffc14ef49?rik=Vc%2fgIvcAxwrIqA&pid=ImgRaw&r=0",
    heroposter:
      "https://th.bing.com/th/id/R.70a2f9351cdd6a0fc91ed5dffc14ef49?rik=Vc%2fgIvcAxwrIqA&pid=ImgRaw&r=0",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 17,
    title: "Tren Bala",
    releaseDate: "August 5, 2022",
    releaseYear: 2022,
    duration: 127,
    classification: "R",
    rating: 3.6,
    genres: ["Action", "Comedy", "Thriller"], // Traducido de "Acción", "Comedia", "Suspenso"
    synopsis:
      "Un asesino a sueldo llamado Ladybug se encuentra con otros asesinos a sueldo para proteger a una niña de un grupo de gánsteres que la quieren secuestrar.",
    posterUrl:
      "https://www.themoviedb.org/t/p/original/tnPGFoeQpLznLplytqPjmvRIJ2F.jpg",
    heroposter:
      "https://www.themoviedb.org/t/p/original/tnPGFoeQpLznLplytqPjmvRIJ2F.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 18,
    title: "Parásitos",
    releaseDate: "May 30, 2019",
    releaseYear: 2019,
    duration: 132,
    classification: "R",
    rating: 4.8,
    genres: ["Drama", "Thriller", "Comedy"],
    synopsis:
      "La familia de Ki-taek está muy unida, pero todos están desempleados. Sin ninguna perspectiva de futuro, el hijo mayor, Ki-woo, es recomendado por su amigo, un estudiante de una prestigiosa universidad, para un trabajo bien pagado como tutor, lo que da inicio a una retahíla de encuentros.",
    posterUrl:
      "https://th.bing.com/th/id/OIP.0KZ917k5v8OgYflOwX_vhQHaEL?rs=1&pid=ImgDetMain",
    heroposter:
      "https://th.bing.com/th/id/OIP.0KZ917k5v8OgYflOwX_vhQHaEL?rs=1&pid=ImgDetMain",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 19,
    title: "El viaje de Chihiro",
    releaseDate: "July 20, 2001",
    releaseYear: 2001,
    duration: 125,
    classification: "PG",
    rating: 4.8,
    genres: ["Animation", "Adventure", "Family", "Fantasy"],
    synopsis:
      "Chihiro y sus padres se ven obligados a detenerse en un túnel misterioso que lleva a otro mundo. Allí, sus padres son convertidos en cerdos y Chihiro se ve obligada a trabajar en una casa de baños para espíritus para sobrevivir.",
    posterUrl:
      "https://image.tmdb.org/t/p/original/vlsi5iZcfDChKNGNvRp7Zp3SULH.jpg",
    heroposter:
      "https://image.tmdb.org/t/p/original/vlsi5iZcfDChKNGNvRp7Zp3SULH.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 20,
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    releaseDate: "December 19, 2001",
    releaseYear: 2001,
    duration: 178,
    classification: "PG-13",
    rating: 4.7,
    genres: ["Adventure", "Fantasy", "Action"],
    synopsis:
      "Un hobbit de la tranquila Comarca y un mago se embarcan en una épica aventura para destruir un anillo mágico y evitar que el Señor Oscuro Sauron conquiste la Tierra Media.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/I/816QLZKwmIL.jpg",
    heroposter:
      "https://images-na.ssl-images-amazon.com/images/I/816QLZKwmIL.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 21,
    title: "La La Land",
    releaseDate: "December 9, 2016",
    releaseYear: 2016,
    duration: 128,
    classification: "PG-13",
    rating: 4.5,
    genres: ["Comedy", "Drama", "Romance"],
    synopsis:
      "Una aspirante a actriz y un pianista de jazz se enamoran mientras persiguen sus sueños en Los Ángeles.",
    posterUrl:
      "https://th.bing.com/th/id/OIP.51jQD4ilf8uWPR6xFlGb7wHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    heroposter:
      "https://th.bing.com/th/id/OIP.51jQD4ilf8uWPR6xFlGb7wHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 22,
    title: "El Castillo Ambulante",
    releaseDate: "November 20, 2004",
    releaseYear: 2004,
    duration: 119,
    classification: "PG",
    rating: 4.7,
    genres: ["Fantasy", "Animation", "Adventure"],
    synopsis:
      "Una joven llamada Sophie es maldecida por una bruja y convertida en anciana. Busca la ayuda de un mago llamado Howl y se ve envuelta en una guerra mágica.",
    posterUrl:
      "https://www.themoviedb.org/t/p/original/5sSMmeqM3jdCtQWBFsqvfbEIsL7.jpg",
    heroposter:
      "https://www.themoviedb.org/t/p/original/5sSMmeqM3jdCtQWBFsqvfbEIsL7.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 23,
    title: "El Club de la Lucha",
    releaseDate: "October 15, 1999",
    releaseYear: 1999,
    duration: 139,
    classification: "R",
    rating: 4.6,
    genres: ["Drama"],
    synopsis:
      "Un hombre insomne y un vendedor de jabón forman un club de lucha clandestino que se convierte en mucho más de lo que esperaban.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Fight_Club_poster.jpg/220px-Fight_Club_poster.jpg",
    heroposter:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Fight_Club_poster.jpg/220px-Fight_Club_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 24,
    title: "El Padrino",
    releaseDate: "March 24, 1972",
    releaseYear: 1972,
    duration: 175,
    classification: "R",
    rating: 4.7,
    genres: ["Drama", "Crime"],
    synopsis:
      "La historia de la familia Corleone, una poderosa familia de la mafia italiana en Nueva York, y su ascenso al poder.",
    posterUrl:
      "https://th.bing.com/th/id/R.f97ecf62eef2b3b57ba71192b309d738?rik=5cz8Hu39N6ZUHw&riu=http%3a%2f%2fdiariodeunacinefila.files.wordpress.com%2f2011%2f09%2fposter-de-el-padrino.jpg&ehk=WhgwF6xslFBh0RB%2f4n9G10tz%2fhYQjMig7nL8t%2bt9DHE%3d&risl=&pid=ImgRaw&r=0",
    heroposter:
      "https://th.bing.com/th/id/R.f97ecf62eef2b3b57ba71192b309d738?rik=5cz8Hu39N6ZUHw&riu=http%3a%2f%2fdiariodeunacinefila.files.wordpress.com%2f2011%2f09%2fposter-de-el-padrino.jpg&ehk=WhgwF6xslFBh0RB%2f4n9G10tz%2fhYQjMig7nL8t%2bt9DHE%3d&risl=&pid=ImgRaw&r=0",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 25,
    title: "Forrest Gump",
    releaseDate: "July 6, 1994",
    releaseYear: 1994,
    duration: 142,
    classification: "PG-13",
    rating: 4.6,
    genres: ["Comedy", "Drama", "Romance"],
    synopsis:
      "La historia de un hombre con un coeficiente intelectual bajo que vive una vida extraordinaria, presenciando y participando en algunos de los eventos más importantes de la historia de Estados Unidos.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg",
    heroposter:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 26,
    title: "Matrix",
    releaseDate: "March 31, 1999",
    releaseYear: 1999,
    duration: 136,
    classification: "R",
    rating: 4.7,
    genres: ["Action", "Sci-Fi"],
    synopsis:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    posterUrl:
      "https://www.themoviedb.org/t/p/original/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
    heroposter:
      "https://www.themoviedb.org/t/p/original/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 27,
    title: "El Silencio de los Corderos",
    releaseDate: "February 14, 1991",
    releaseYear: 1991,
    duration: 118,
    classification: "R",
    rating: 4.5,
    genres: ["Crime", "Thriller"],
    synopsis:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a disturbed skinning murderer.",
    posterUrl:
      "https://th.bing.com/th/id/R.83648afbf4854e5dcb0a487459232ea9?rik=%2bUA1v6M16msEWw&riu=http%3a%2f%2fwww.cartelesmix.com%2fcarteles%2fcarteles%2fletras%2fsilenciocorderos11.jpg&ehk=NmaLxo6HgeKKGs0nSK4iQFeMNLLPJsWr2n%2fU1YFObck%3d&risl=&pid=ImgRaw&r=0",
    heroposter:
      "https://th.bing.com/th/id/R.83648afbf4854e5dcb0a487459232ea9?rik=%2bUA1v6M16msEWw&riu=http%3a%2f%2fwww.cartelesmix.com%2fcarteles%2fcarteles%2fletras%2fsilenciocorderos11.jpg&ehk=NmaLxo6HgeKKGs0nSK4iQFeMNLLPJsWr2n%2fU1YFObck%3d&risl=&pid=ImgRaw&r=0",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 28,
    title: "Memento",
    releaseDate: "September 5, 2000",
    releaseYear: 2000,
    duration: 113,
    classification: "R",
    rating: 4.6,
    genres: ["Mystery", "Thriller"],
    synopsis:
      "A man with short-term memory loss attempts to track down his wife's killer.",
    posterUrl:
      "https://th.bing.com/th/id/OIP.DOMT-C0e9hysmxYwqq-s6gHaKX?rs=1&pid=ImgDetMain",
    heroposter:
      "https://th.bing.com/th/id/OIP.DOMT-C0e9hysmxYwqq-s6gHaKX?rs=1&pid=ImgDetMain",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 29,
    title: "Asesinato en el Expreso de Oriente",
    releaseDate: "November 3, 2017",
    releaseYear: 2017,
    duration: 114,
    classification: "PG-13",
    rating: 4.1,
    genres: ["Crime", "Drama", "Mystery"],
    synopsis:
      "In 1930s, a detective investigates the murder of an American tycoon aboard a lavish train traveling through Europe.",
    posterUrl:
      "https://th.bing.com/th/id/R.cceb6b9ac8e6fc80b1320a8ede0e1bb4?rik=6gRJag%2fLMPtmGw&riu=http%3a%2f%2fes.web.img3.acsta.net%2fpictures%2f17%2f07%2f05%2f09%2f37%2f477704.jpg&ehk=OVUd%2f7kX8t8zMyaa8KcuHymrJ8jQt%2fOzO7%2fDbZCoFyU%3d&risl=&pid=ImgRaw&r=0",
    heroposter:
      "https://th.bing.com/th/id/R.cceb6b9ac8e6fc80b1320a8ede0e1bb4?rik=6gRJag%2fLMPtmGw&riu=http%3a%2f%2fes.web.img3.acsta.net%2fpictures%2f17%2f07%2f05%2f09%2f37%2f477704.jpg&ehk=OVUd%2f7kX8t8zMyaa8KcuHymrJ8jQt%2fOzO7%2fDbZCoFyU%3d&risl=&pid=ImgRaw&r=0",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 30,
    title: "La Naranja Mecánica",
    releaseDate: "December 19, 1971",
    releaseYear: 1971,
    duration: 136,
    classification: "R",
    rating: 4.4,
    genres: ["Crime", "Drama", "Sci-Fi"],
    synopsis:
      "In a future Britain, charismatic and psychopathic delinquent Alex DeLarge is jailed and volunteers for an experimental aversion therapy developed by the government in an effort to reduce crime.",
    posterUrl:
      "https://th.bing.com/th/id/OIP.k7iY9B2Ij7c3ooHSisIIEgHaLM?rs=1&pid=ImgDetMain",
    heroposter:
      "https://th.bing.com/th/id/OIP.k7iY9B2Ij7c3ooHSisIIEgHaLM?rs=1&pid=ImgDetMain",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 31,
    title: "Blade Runner 2049",
    releaseDate: "October 6, 2017",
    releaseYear: 2017,
    duration: 164,
    classification: "R",
    rating: 4.5,
    genres: ["Sci-Fi", "Thriller"],
    synopsis:
      "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    posterUrl:
      "https://th.bing.com/th/id/R.2c16c35610053ec14da2705309c18597?rik=sYFEA%2bdaDzjFSA&pid=ImgRaw&r=0",
    heroposter:
      "https://th.bing.com/th/id/R.2c16c35610053ec14da2705309c18597?rik=sYFEA%2bdaDzjFSA&pid=ImgRaw&r=0",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 32,
    title: "La Princesa Mononoke",
    releaseDate: "July 12, 1997",
    releaseYear: 1997,
    duration: 134,
    classification: "PG-13",
    rating: 4.8,
    genres: ["Animation", "Adventure", "Fantasy"],
    synopsis:
      "On a journey to find the cure for a Tatarigami curse, Ashitaka finds himself in the middle of a war between the forest gods and a mining colony. In the struggle to reconcile the two sides, he also meets San, the Princess Mononoke.",
    posterUrl: "https://wallpapercave.com/wp/wp4108308.jpg",
    heroposter: "https://wallpapercave.com/wp/wp4108308.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 33,
    title: "La Llegada",
    releaseDate: "November 11, 2016",
    releaseYear: 2016,
    duration: 116,
    classification: "PG-13",
    rating: 4.4,
    genres: ["Drama", "Sci-Fi", "Thriller"],
    synopsis:
      "A linguist is recruited by the military to assist in translating alien communications after twelve mysterious spacecraft land around the world.",
    posterUrl:
      "https://tse4.mm.bing.net/th/id/OIP.PGri9UDggRLzQ0yTf3wXpAHaKr?rs=1&pid=ImgDetMain&o=7&rm=3",
    heroposter:
      "https://tse4.mm.bing.net/th/id/OIP.PGri9UDggRLzQ0yTf3wXpAHaKr?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 34,
    title: "Knives Out",
    releaseDate: "November 11, 2023",
    releaseYear: 2023,
    duration: 116,
    classification: "PG-13",
    rating: 4.8,
    genres: ["Drama", "Sci-Fi", "Thriller"],
    synopsis:
      "A linguist is recruited by the military to assist in translating alien communications after twelve mysterious spacecraft land around the world.",
    posterUrl:
      "https://tse1.mm.bing.net/th/id/OIP.Wa_BXcNfNWzVSN9RLmq2bwHaLG?rs=1&pid=ImgDetMain&o=7&rm=3",
    heroposter:
      "https://tse1.mm.bing.net/th/id/OIP.Wa_BXcNfNWzVSN9RLmq2bwHaLG?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 35,
    title: "Kimetsu no Yaiba: Castillo infinito",
    releaseDate: "November 11, 2024",
    releaseYear: 2024,
    duration: 116,
    classification: "PG-13",
    rating: 4.8,
    genres: ["Drama", "Sci-Fi", "Thriller"],
    synopsis:
      "A linguist is recruited by the military to assist in translating alien communications after twelve mysterious spacecraft land around the world.",
    posterUrl:
      "https://palomaynacho.com/wp-content/uploads/2024/06/Demon-Slayer-trilogia.jpg",
    heroposter:
      "https://palomaynacho.com/wp-content/uploads/2024/06/Demon-Slayer-trilogia.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
  {
    id: 36,
    title: "Deadpool 2",
    releaseDate: "June 1, 2018",
    releaseYear: 2018,
    duration: 119,
    classification: "R",
    rating: 5,
    genres: ["Drama", "Sci-Fi", "Thriller"],
    synopsis:
      "A linguist is recruited by the military to assist in translating alien communications after twelve mysterious spacecraft land around the world.",
    posterUrl:
      "https://cdnb.artstation.com/p/assets/images/images/036/976/157/large/ismael-fofana-deadpool-2-movie-poster-design.jpg?1619123645",
    heroposter:
      "https://cdnb.artstation.com/p/assets/images/images/036/976/157/large/ismael-fofana-deadpool-2-movie-poster-design.jpg?1619123645",
    trailerUrl: "https://www.youtube.com/watch?v=x7uLutVRBfI",
  },
];

const heroMovies = [
  featuredMovies[34],
  featuredMovies[0],
  featuredMovies[1],
  featuredMovies[2],
  featuredMovies[3],
  featuredMovies[16],
];

const recentMovies = [
  featuredMovies[0],
  featuredMovies[1],
  featuredMovies[2],
  featuredMovies[3],
  featuredMovies[4],
  featuredMovies[5],
];

const nextsMovies = [
  featuredMovies[6],
  featuredMovies[7],
  featuredMovies[8],
  featuredMovies[31],
  featuredMovies[9],
  featuredMovies[11],
];

const genres = [
  "Action",
  "Adventure",
  "Sci-Fi",
  "Drama",
  "Comedy",
  "Animation",
  "Anime",
  "Fantasy",
  "Family",
  "Romance",
  "Thriller",
];

module.exports = {
  featuredMovies,
  heroMovies,
  recentMovies,
  nextsMovies,
  genres,
};
