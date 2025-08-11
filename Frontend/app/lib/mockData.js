const movies = [
  {
    id: 1,
    title: "Ready Player One",
    release_date: "March 29, 2018",
    release_year: 2012,
    duration: 140,
    classification: "PG-13",
    rating: 5,
    genres: ["Action", "Sci-Fi", "Adventure", "Fantasy", "Thriller"],
    synopsis:
      "En el año 2045, el mundo sufre crisis económica, social y ambiental. La mayoría de las personas escapan a la dura realidad a través de OASIS, un enorme universo de realidad virtual donde se puede estudiar, trabajar, jugar y vivir aventuras. Cuando su creador, James Halliday, muere, deja un desafío: un “huevo de pascua” escondido en OASIS. Quien lo encuentre heredará toda su fortuna y el control total del mundo virtual. El joven Wade Watts, obsesionado con la cultura de los 80 y con la vida de Halliday, se lanza a la búsqueda. Enfrentará enigmas, rivales y peligros tanto en el mundo virtual como en el real, compitiendo contra una corporación sin escrúpulos que quiere controlar OASIS para sus propios fines. Es una historia de aventura, nostalgia gamer y crítica social, con muchas referencias a videojuegos, películas, música y series clásicas.",
    poster_url:
      "https://images.hdqwalls.com/download/4k-ready-player-one-movie-poster-3y-1242x2668.jpg",
    hero_poster:
      "https://www.themoviedb.org/t/p/original/4DWu2yBNDi7kbwFnj3Fpaq3P2hC.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=Ready+Player+One+trailer",
  },
  {
    id: 2,
    title: "John Wick",
    release_date: "October 24, 2014",
    release_year: 2014,
    duration: 101,
    classification: "R",
    rating: 5,
    genres: ["Action", "Thriller"], // Traducido de "Acción", "Suspenso"
    synopsis:
      "Un ex asesino busca venganza contra los gánsteres que mataron a su perro, un regalo de su difunta esposa.",
    poster_url:
      "https://th.bing.com/th/id/OIP.bacb4gLuvXQpcAFpO7Q9hgHaLH?rs=1&pid=ImgDetMain",
    hero_poster:
      "https://th.bing.com/th/id/OIP.bacb4gLuvXQpcAFpO7Q9hgHaLH?rs=1&pid=ImgDetMain",
    trailer_url:
      "https://www.youtube.com/results?search_query=John+Wick+trailer",
  },
  {
    id: 3,
    title: "Baby Driver",
    release_date: "June 28, 2017",
    release_year: 2012,
    duration: 113,
    classification: "R",
    rating: 5,
    genres: ["Action", "Crime", "Music", "Thriller"],
    synopsis:
      "A young getaway driver relies on his passion for music to be the best in the game. When he meets the girl of his dreams...",
    poster_url:
      "https://th.bing.com/th/id/R.bb2c781b3b67dd18c6a0465c25364127?rik=kfMH%2fNJtuK801w&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2017%2f05%2fbaby-driver-final-poster.jpeg&ehk=h3hnclIw44KJLItVE5ZQpIwh8goW460G51FTku8yK1s%3d&risl=&pid=ImgRaw&r=0",
    hero_poster:
      "https://th.bing.com/th/id/R.bb2c781b3b67dd18c6a0465c25364127?rik=kfMH%2fNJtuK801w&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2017%2f05%2fbaby-driver-final-poster.jpeg&ehk=h3hnclIw44KJLItVE5ZQpIwh8goW460G51FTku8yK1s%3d&risl=&pid=ImgRaw&r=0",
    trailer_url:
      "https://www.youtube.com/results?search_query=Baby+Driver+trailer",
  },
  {
    id: 4,
    title: "Mad Max: Fury Road",
    release_date: "May 15, 2015",
    release_year: 2012,
    duration: 120,
    classification: "R",
    rating: 5,
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland...",
    poster_url:
      "https://posterspy.com/wp-content/uploads/2015/03/madmax_2_small.jpg",
    hero_poster:
      "https://posterspy.com/wp-content/uploads/2015/03/madmax_2_small.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=Mad+Max+Fury+Road+trailer",
  },
  {
    id: 5,
    title: "The Mitchells vs. the Machines",
    release_date: "April 30, 2021",
    release_year: 2021,
    duration: 113,
    classification: "PG",
    rating: 5,
    genres: ["Animation", "Comedy", "Family", "Sci-Fi"],
    synopsis:
      "Una familia disfuncional debe salvar al mundo cuando una rebelión de robots amenaza con acabar con la humanidad durante un road-trip familiar.",
    poster_url:
      "https://www.aventurasnerd.com/wp-content/uploads/2022/02/La-Familia-Mitcher-VS-Las-Maquinas-scaled.jpg",
    hero_poster:
      "https://www.aventurasnerd.com/wp-content/uploads/2022/02/La-Familia-Mitcher-VS-Las-Maquinas-scaled.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Mitchells+vs+the+Machines+trailer",
  },
  {
    id: 6,
    title: "Deadpool 2",
    release_date: "June 1, 2018",
    release_year: 2018,
    duration: 119,
    classification: "R",
    rating: 5,
    genres: ["Drama", "Sci-Fi", "Thriller"],
    synopsis:
      "A linguist is recruited by the military to assist in translating alien communications after twelve mysterious spacecraft land around the world.",
    poster_url:
      "https://cdnb.artstation.com/p/assets/images/images/036/976/157/large/ismael-fofana-deadpool-2-movie-poster-design.jpg?1619123645",
    hero_poster:
      "https://cdnb.artstation.com/p/assets/images/images/036/976/157/large/ismael-fofana-deadpool-2-movie-poster-design.jpg?1619123645",
    trailer_url:
      "https://www.youtube.com/results?search_query=Deadpool+2+trailer",
  },
  {
    id: 7,
    title: "Kingsman: The Secret Service",
    release_date: "September 20, 2017",
    release_year: 2017,
    duration: 141,
    classification: "R",
    rating: 5,
    genres: ["Action", "Adventure", "Comedy"], // Traducido de "Acción", "Aventura", "Comedia"
    synopsis:
      "Cuando el cuartel general de Kingsman es destruido, los agentes viajan a Estados Unidos para unirse a su organización hermana, Statesman, para detener a un enemigo común.",
    poster_url:
      "https://tse4.mm.bing.net/th/id/OIP.DyMGIjBsbUm8CeVP5YUfHQHaJ3?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse4.mm.bing.net/th/id/OIP.DyMGIjBsbUm8CeVP5YUfHQHaJ3?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=Kingsman+The+Secret+Service+trailer",
  },
  {
    id: 8,
    title: "Bullet Train",
    release_date: "August 5, 2022",
    release_year: 2022,
    duration: 127,
    classification: "R",
    rating: 5,
    genres: ["Action", "Comedy", "Thriller"], // Traducido de "Acción", "Comedia", "Suspenso"
    synopsis:
      "Un asesino a sueldo llamado Ladybug se encuentra con otros asesinos a sueldo para proteger a una niña de un grupo de gánsteres que la quieren secuestrar.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/tnPGFoeQpLznLplytqPjmvRIJ2F.jpg",
    hero_poster:
      "https://www.themoviedb.org/t/p/original/tnPGFoeQpLznLplytqPjmvRIJ2F.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=Bullet+Train+trailer",
  },
  {
    id: 9,
    title: "The murder on the orient express",
    release_date: "November 3, 2017",
    release_year: 2017,
    duration: 114,
    classification: "PG-13",
    rating: 5,
    genres: ["Crime", "Drama", "Mystery"],
    synopsis:
      "In 1930s, a detective investigates the murder of an American tycoon aboard a lavish train traveling through Europe.",
    poster_url:
      "https://th.bing.com/th/id/R.cceb6b9ac8e6fc80b1320a8ede0e1bb4?rik=6gRJag%2fLMPtmGw&riu=http%3a%2f%2fes.web.img3.acsta.net%2fpictures%2f17%2f07%2f05%2f09%2f37%2f477704.jpg&ehk=OVUd%2f7kX8t8zMyaa8KcuHymrJ8jQt%2fOzO7%2fDbZCoFyU%3d&risl=&pid=ImgRaw&r=0",
    hero_poster:
      "https://th.bing.com/th/id/R.cceb6b9ac8e6fc80b1320a8ede0e1bb4?rik=6gRJag%2fLMPtmGw&riu=http%3a%2f%2fes.web.img3.acsta.net%2fpictures%2f17%2f07%2f05%2f09%2f37%2f477704.jpg&ehk=OVUd%2f7kX8t8zMyaa8KcuHymrJ8jQt%2fOzO7%2fDbZCoFyU%3d&risl=&pid=ImgRaw&r=0",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+murder+on+the+orient+express+trailer",
  },
  {
    id: 10,
    title: "Knives Out",
    release_date: "November 11, 2023",
    release_year: 2023,
    duration: 116,
    classification: "PG-13",
    rating: 5,
    genres: ["Drama", "Sci-Fi", "Thriller"],
    synopsis:
      "A linguist is recruited by the military to assist in translating alien communications after twelve mysterious spacecraft land around the world.",
    poster_url:
      "https://tse1.mm.bing.net/th/id/OIP.Wa_BXcNfNWzVSN9RLmq2bwHaLG?rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse1.mm.bing.net/th/id/OIP.Wa_BXcNfNWzVSN9RLmq2bwHaLG?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=Knives+Out+trailer",
  },
  {
    id: 11,
    title: "Now you see",
    release_date: "May 31, 2013",
    release_year: 2013,
    duration: 115,
    classification: "PG-13",
    rating: 5,
    genres: ["Crime", "Mystery", "Thriller"], // Traducido de "Crimen", "Misterio", "Suspenso"
    synopsis:
      "Un equipo de ilusionistas realiza robos bancarios durante sus espectáculos y los fondos se entregan a la audiencia.",
    poster_url:
      "https://th.bing.com/th/id/OIP.3n3N603r2lC2wsy5uvt6MAHaLH?rs=1&pid=ImgDetMain",
    hero_poster:
      "https://th.bing.com/th/id/OIP.3n3N603r2lC2wsy5uvt6MAHaLH?rs=1&pid=ImgDetMain",
    trailer_url:
      "https://www.youtube.com/results?search_query=Now+you+see+Me+trailer",
  },
  {
    id: 12,
    title: "The Truman Show",
    release_date: "June 5, 1998",
    release_year: 1998,
    duration: 103,
    classification: "PG-13",
    rating: 5,
    genres: ["Drama", "Comedy", "Sci-Fi"],
    synopsis:
      "Un hombre descubre que su vida entera es un reality show transmitido a escala mundial y lucha por recuperar su libertad.",
    poster_url:
      "https://tse4.mm.bing.net/th/id/OIP.MZHBgMI4AQOr4TzeXiedMAHaK_?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse4.mm.bing.net/th/id/OIP.MZHBgMI4AQOr4TzeXiedMAHaK_?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Truman+Show+trailer",
  },
  {
    id: 13,
    title: "My Neighbor Totoro",
    release_date: "April 16, 1988",
    release_year: 1988,
    duration: 86,
    classification: "G",
    rating: 4.8,
    genres: ["Animation", "Family", "Fantasy"],
    synopsis:
      "Two young girls move to the countryside and encounter a mystical forest spirit named Totoro.",
    poster_url:
      "https://th.bing.com/th/id/R.548566e8cf45dc11b59d13c12d5dbec0?rik=aeeJkyabBBcO%2fQ&riu=http%3a%2f%2fwww.cartelesmix.com%2fcarteles%2festrenos2009%2fmivecinototoro8803.jpg&ehk=5ZPAAdyJ%2bdhHskc94c2nB596NcISHCCWPnAWMuJZyb4%3d&risl=&pid=ImgRaw&r=0",
    hero_poster:
      "https://th.bing.com/th/id/R.548566e8cf45dc11b59d13c12d5dbec0?rik=aeeJkyabBBcO%2fQ&riu=http%3a%2f%2fwww.cartelesmix.com%2fcarteles%2festrenos2009%2fmivecinototoro8803.jpg&ehk=5ZPAAdyJ%2bdhHskc94c2nB596NcISHCCWPnAWMuJZyb4%3d&risl=&pid=ImgRaw&r=0",
    trailer_url:
      "https://www.youtube.com/results?search_query=My+Neighbor+Totoro+trailer",
  },
  {
    id: 14,
    title: "Dragon Ball Super: Broly",
    release_date: "December 14, 2018",
    release_year: 2018,
    duration: 100,
    classification: "PG",
    rating: 4.4,
    genres: ["Animation", "Action", "Fantasy", "Sci-Fi"],
    synopsis: "Goku and Vegeta face off against the legendary Saiyan Broly.",
    poster_url:
      "https://i.pinimg.com/originals/c5/5b/12/c55b124ddca12ac0165f57c90a09acba.jpg",
    hero_poster:
      "https://i.pinimg.com/originals/c5/5b/12/c55b124ddca12ac0165f57c90a09acba.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=Dragon+Ball+Super+Broly+trailer",
  },
  {
    id: 15,
    title: "One Piece Film: Red",
    release_date: "August 6, 2022",
    release_year: 2022,
    duration: 115,
    classification: "PG-13",
    rating: 4.3,
    genres: ["Animation", "Action", "Adventure", "Fantasy"],
    synopsis:
      "Luffy and his crew attend a concert by Uta, a world-famous singer with a hidden past.",
    poster_url:
      "https://th.bing.com/th/id/R.3fb65148f9520a8aa183096570328e76?rik=gn42A1VyPhVl2w&pid=ImgRaw&r=0",
    hero_poster:
      "https://th.bing.com/th/id/R.3fb65148f9520a8aa183096570328e76?rik=gn42A1VyPhVl2w&pid=ImgRaw&r=0",
    trailer_url:
      "https://www.youtube.com/results?search_query=One+Piece+Film+Red+trailer",
  },
  {
    id: 16,
    title: "Poor Things",
    release_date: "December 8, 2023",
    release_year: 2012,
    duration: 141,
    classification: "R",
    rating: 4.5,
    genres: ["Drama", "Sci-Fi", "Fantasy"],
    synopsis:
      "A young woman, Bella Baxter, is resurrected by a brilliant scientist and embarks on an odyssey of self-discovery.",
    poster_url:
      "https://i.pinimg.com/originals/76/71/5e/76715ecff73dbd26359a6216966eede4.jpg",
    hero_poster:
      "https://images.bauerhosting.com/empire/2023/07/poor-things.jpg?ar=16:9&fit=crop&crop=top&auto=format&w=1440&q=80",
    trailer_url:
      "https://www.youtube.com/results?search_query=Poor+Things+trailer",
  },
  {
    id: 17,
    title: "Tron",
    release_date: "July 9, 1982",
    release_year: 2012,
    duration: 96,
    classification: "PG",
    rating: 3.8,
    genres: ["Action", "Adventure", "Sci-Fi"],
    synopsis:
      "A computer hacker is abducted into a digital world and forced to participate in gladiatorial games.",
    poster_url:
      "https://tse1.mm.bing.net/th/id/OIP.46aplvbkj6wxXVJlV4k4jgHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse1.mm.bing.net/th/id/OIP.46aplvbkj6wxXVJlV4k4jgHaK-?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url: "https://www.youtube.com/results?search_query=Tron+trailer",
  },
  {
    id: 18,
    title: "How to train your dragon",
    release_date: "March 26, 2010",
    release_year: 2010,
    duration: 98,
    classification: "PG",
    rating: 4.5,
    genres: ["Animation", "Adventure", "Family"], // Traducido de "Animación", "Aventura", "Familiar"
    synopsis:
      "Un joven vikingo que aspira a cazar dragones se hace amigo de un dragón legendario y aprende que hay más en las criaturas de lo que pensaba.",
    poster_url:
      "https://tse4.mm.bing.net/th/id/OIP.EGENDUFtDhhdz9vM0qJNFgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse4.mm.bing.net/th/id/OIP.EGENDUFtDhhdz9vM0qJNFgHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=How+to+train+your+dragon+trailer",
  },
  {
    id: 19,
    title: "Godzilla (2014)",
    release_date: "May 14, 2014",
    release_year: 2014,
    duration: 123,
    classification: "PG-13",
    rating: 3.7,
    genres: ["Action", "Adventure", "Sci-Fi"], // Traducido de "Acción", "Aventura", "Ciencia ficción"
    synopsis:
      "La humanidad lucha por sobrevivir cuando monstruos gigantes, conocidos como MUTOs, se levantan para desafiar el dominio de Godzilla.",
    poster_url:
      "https://image.tmdb.org/t/p/original/1t0FcqSsBs51PDhDkFd7EiEytU6.jpg",
    hero_poster:
      "https://image.tmdb.org/t/p/original/1t0FcqSsBs51PDhDkFd7EiEytU6.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=Godzilla+trailer",
  },
  {
    id: 20,
    title: "Men in black",
    release_date: "July 2, 1997",
    release_year: 1997,
    duration: 98,
    classification: "PG-13",
    rating: 4.1,
    genres: ["Action", "Adventure", "Comedy"], // Traducido de "Acción", "Aventura", "Comedia"
    synopsis:
      "Dos agentes de una organización secreta que supervisa la actividad extraterrestre en la Tierra deben evitar que un terrorista alienígena destruya el planeta.",
    poster_url:
      "https://tse4.mm.bing.net/th/id/OIP.xyugdGOFp8FZRSYmkhp0vAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse4.mm.bing.net/th/id/OIP.xyugdGOFp8FZRSYmkhp0vAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=Men+in+black+trailer",
  },
  {
    id: 21,
    title: "Watchmen",
    release_date: "March 6, 2009",
    release_year: 2009,
    duration: 163,
    classification: "R",
    rating: 4.2,
    genres: ["Action", "Drama", "Mystery"], // Traducido de "Acción", "Drama", "Misterio"
    synopsis:
      "En una realidad alternativa de 1985, un grupo de superhéroes retirados investiga el asesinato de uno de sus miembros y descubre una conspiración que podría cambiar el curso de la historia.",
    poster_url:
      "https://tse2.mm.bing.net/th/id/OIP.pfJqWFqv6PHuborNFuLpygHaLb?rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse2.mm.bing.net/th/id/OIP.pfJqWFqv6PHuborNFuLpygHaLb?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=Watchmen+trailer",
  },
  {
    id: 22,
    title: "X-Men",
    release_date: "July 14, 2000",
    release_year: 2000,
    duration: 104,
    classification: "PG-13",
    rating: 3.9,
    genres: ["Action", "Adventure", "Sci-Fi"], // Traducido de "Acción", "Aventura", "Ciencia ficción"
    synopsis:
      "Un grupo de mutantes con habilidades extraordinarias lucha por proteger a la humanidad de una amenaza mutante radical.",
    poster_url:
      "https://th.bing.com/th/id/R.70a2f9351cdd6a0fc91ed5dffc14ef49?rik=Vc%2fgIvcAxwrIqA&pid=ImgRaw&r=0",
    hero_poster:
      "https://th.bing.com/th/id/R.70a2f9351cdd6a0fc91ed5dffc14ef49?rik=Vc%2fgIvcAxwrIqA&pid=ImgRaw&r=0",
    trailer_url: "https://www.youtube.com/results?search_query=X-Men+trailer",
  },
  {
    id: 23,
    title: "parasite",
    release_date: "May 30, 2019",
    release_year: 2019,
    duration: 132,
    classification: "R",
    rating: 4.8,
    genres: ["Drama", "Thriller", "Comedy"],
    synopsis:
      "La familia de Ki-taek está muy unida, pero todos están desempleados. Sin ninguna perspectiva de futuro, el hijo mayor, Ki-woo, es recomendado por su amigo, un estudiante de una prestigiosa universidad, para un trabajo bien pagado como tutor, lo que da inicio a una retahíla de encuentros.",
    poster_url:
      "https://th.bing.com/th/id/OIP.0KZ917k5v8OgYflOwX_vhQHaEL?rs=1&pid=ImgDetMain",
    hero_poster:
      "https://th.bing.com/th/id/OIP.0KZ917k5v8OgYflOwX_vhQHaEL?rs=1&pid=ImgDetMain",
    trailer_url:
      "https://www.youtube.com/results?search_query=parasite+trailer",
  },
  {
    id: 24,
    title: "Spirited Away",
    release_date: "July 20, 2001",
    release_year: 2001,
    duration: 125,
    classification: "PG",
    rating: 4.8,
    genres: ["Animation", "Adventure", "Family", "Fantasy"],
    synopsis:
      "Chihiro y sus padres se ven obligados a detenerse en un túnel misterioso que lleva a otro mundo. Allí, sus padres son convertidos en cerdos y Chihiro se ve obligada a trabajar en una casa de baños para espíritus para sobrevivir.",
    poster_url:
      "https://image.tmdb.org/t/p/original/vlsi5iZcfDChKNGNvRp7Zp3SULH.jpg",
    hero_poster:
      "https://image.tmdb.org/t/p/original/vlsi5iZcfDChKNGNvRp7Zp3SULH.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=Spirited+Away+trailer",
  },
  {
    id: 25,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    release_date: "December 19, 2001",
    release_year: 2001,
    duration: 178,
    classification: "PG-13",
    rating: 4.7,
    genres: ["Adventure", "Fantasy", "Action"],
    synopsis:
      "Un hobbit de la tranquila Comarca y un mago se embarcan en una épica aventura para destruir un anillo mágico y evitar que el Señor Oscuro Sauron conquiste la Tierra Media.",
    poster_url:
      "https://images-na.ssl-images-amazon.com/images/I/816QLZKwmIL.jpg",
    hero_poster:
      "https://images-na.ssl-images-amazon.com/images/I/816QLZKwmIL.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Lord+of+the+Rings%3A+The+Fellowship+of+the+Ring+trailer",
  },
  {
    id: 26,
    title: "La La Land",
    release_date: "December 9, 2016",
    release_year: 2016,
    duration: 128,
    classification: "PG-13",
    rating: 4.5,
    genres: ["Comedy", "Drama", "Romance"],
    synopsis:
      "Una aspirante a actriz y un pianista de jazz se enamoran mientras persiguen sus sueños en Los Ángeles.",
    poster_url:
      "https://th.bing.com/th/id/OIP.51jQD4ilf8uWPR6xFlGb7wHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    hero_poster:
      "https://th.bing.com/th/id/OIP.51jQD4ilf8uWPR6xFlGb7wHaLH?w=186&h=279&c=7&r=0&o=5&pid=1.7",
    trailer_url:
      "https://www.youtube.com/results?search_query=La+La+Land+trailer",
  },
  {
    id: 27,
    title: "Howl's Moving Castle",
    release_date: "November 20, 2004",
    release_year: 2004,
    duration: 119,
    classification: "PG",
    rating: 4.7,
    genres: ["Fantasy", "Animation", "Adventure"],
    synopsis:
      "Una joven llamada Sophie es maldecida por una bruja y convertida en anciana. Busca la ayuda de un mago llamado Howl y se ve envuelta en una guerra mágica.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/5sSMmeqM3jdCtQWBFsqvfbEIsL7.jpg",
    hero_poster:
      "https://www.themoviedb.org/t/p/original/5sSMmeqM3jdCtQWBFsqvfbEIsL7.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=Howl%27s+Moving+Castle+trailer",
  },
  {
    id: 28,
    title: "The Fight Club",
    release_date: "October 15, 1999",
    release_year: 1999,
    duration: 139,
    classification: "R",
    rating: 4.6,
    genres: ["Drama"],
    synopsis:
      "Un hombre insomne y un vendedor de jabón forman un club de lucha clandestino que se convierte en mucho más de lo que esperaban.",
    poster_url:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Fight_Club_poster.jpg/220px-Fight_Club_poster.jpg",
    hero_poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Fight_Club_poster.jpg/220px-Fight_Club_poster.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Fight+Club+trailer",
  },
  {
    id: 29,
    title: "The Godfather",
    release_date: "March 24, 1972",
    release_year: 1972,
    duration: 175,
    classification: "R",
    rating: 4.7,
    genres: ["Drama", "Crime"],
    synopsis:
      "La historia de la familia Corleone, una poderosa familia de la mafia italiana en Nueva York, y su ascenso al poder.",
    poster_url:
      "https://th.bing.com/th/id/R.f97ecf62eef2b3b57ba71192b309d738?rik=5cz8Hu39N6ZUHw&riu=http%3a%2f%2fdiariodeunacinefila.files.wordpress.com%2f2011%2f09%2fposter-de-el-padrino.jpg&ehk=WhgwF6xslFBh0RB%2f4n9G10tz%2fhYQjMig7nL8t%2bt9DHE%3d&risl=&pid=ImgRaw&r=0",
    hero_poster:
      "https://th.bing.com/th/id/R.f97ecf62eef2b3b57ba71192b309d738?rik=5cz8Hu39N6ZUHw&riu=http%3a%2f%2fdiariodeunacinefila.files.wordpress.com%2f2011%2f09%2fposter-de-el-padrino.jpg&ehk=WhgwF6xslFBh0RB%2f4n9G10tz%2fhYQjMig7nL8t%2bt9DHE%3d&risl=&pid=ImgRaw&r=0",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Godfather+trailer",
  },
  {
    id: 30,
    title: "Forrest Gump",
    release_date: "July 6, 1994",
    release_year: 1994,
    duration: 142,
    classification: "PG-13",
    rating: 4.6,
    genres: ["Comedy", "Drama", "Romance"],
    synopsis:
      "La historia de un hombre con un coeficiente intelectual bajo que vive una vida extraordinaria, presenciando y participando en algunos de los eventos más importantes de la historia de Estados Unidos.",
    poster_url:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg",
    hero_poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Forrest_Gump_poster.jpg/220px-Forrest_Gump_poster.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=Forrest+Gump+trailer",
  },
  {
    id: 31,
    title: "Matrix",
    release_date: "March 31, 1999",
    release_year: 1999,
    duration: 136,
    classification: "R",
    rating: 4.7,
    genres: ["Action", "Sci-Fi"],
    synopsis:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
    hero_poster:
      "https://www.themoviedb.org/t/p/original/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
    trailer_url: "https://www.youtube.com/results?search_query=Matrix+trailer",
  },
  {
    id: 32,
    title: "The Silence of the Lambs",
    release_date: "February 14, 1991",
    release_year: 1991,
    duration: 118,
    classification: "R",
    rating: 4.5,
    genres: ["Crime", "Thriller"],
    synopsis:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a disturbed skinning murderer.",
    poster_url:
      "https://th.bing.com/th/id/R.83648afbf4854e5dcb0a487459232ea9?rik=%2bUA1v6M16msEWw&riu=http%3a%2f%2fwww.cartelesmix.com%2fcarteles%2fcarteles%2fletras%2fsilenciocorderos11.jpg&ehk=NmaLxo6HgeKKGs0nSK4iQFeMNLLPJsWr2n%2fU1YFObck%3d&risl=&pid=ImgRaw&r=0",
    hero_poster:
      "https://th.bing.com/th/id/R.83648afbf4854e5dcb0a487459232ea9?rik=%2bUA1v6M16msEWw&riu=http%3a%2f%2fwww.cartelesmix.com%2fcarteles%2fcarteles%2fletras%2fsilenciocorderos11.jpg&ehk=NmaLxo6HgeKKGs0nSK4iQFeMNLLPJsWr2n%2fU1YFObck%3d&risl=&pid=ImgRaw&r=0",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Silence+of+the+Lambs+trailer",
  },
  {
    id: 33,
    title: "Memento",
    release_date: "September 5, 2000",
    release_year: 2000,
    duration: 113,
    classification: "R",
    rating: 4.6,
    genres: ["Mystery", "Thriller"],
    synopsis:
      "A man with short-term memory loss attempts to track down his wife's killer.",
    poster_url:
      "https://th.bing.com/th/id/OIP.DOMT-C0e9hysmxYwqq-s6gHaKX?rs=1&pid=ImgDetMain",
    hero_poster:
      "https://th.bing.com/th/id/OIP.DOMT-C0e9hysmxYwqq-s6gHaKX?rs=1&pid=ImgDetMain",
    trailer_url: "https://www.youtube.com/results?search_query=Memento+trailer",
  },
  {
    id: 34,
    title: "Clockwork Orange",
    release_date: "December 19, 1971",
    release_year: 1971,
    duration: 136,
    classification: "R",
    rating: 4.4,
    genres: ["Crime", "Drama", "Sci-Fi"],
    synopsis:
      "In a future Britain, charismatic and psychopathic delinquent Alex DeLarge is jailed and volunteers for an experimental aversion therapy developed by the government in an effort to reduce crime.",
    poster_url:
      "https://th.bing.com/th/id/OIP.k7iY9B2Ij7c3ooHSisIIEgHaLM?rs=1&pid=ImgDetMain",
    hero_poster:
      "https://th.bing.com/th/id/OIP.k7iY9B2Ij7c3ooHSisIIEgHaLM?rs=1&pid=ImgDetMain",
    trailer_url:
      "https://www.youtube.com/results?search_query=Clockwork+Orange+trailer",
  },
  {
    id: 35,
    title: "Blade Runner 2049",
    release_date: "October 6, 2017",
    release_year: 2017,
    duration: 164,
    classification: "R",
    rating: 4.5,
    genres: ["Sci-Fi", "Thriller"],
    synopsis:
      "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    poster_url:
      "https://th.bing.com/th/id/R.2c16c35610053ec14da2705309c18597?rik=sYFEA%2bdaDzjFSA&pid=ImgRaw&r=0",
    hero_poster:
      "https://th.bing.com/th/id/R.2c16c35610053ec14da2705309c18597?rik=sYFEA%2bdaDzjFSA&pid=ImgRaw&r=0",
    trailer_url:
      "https://www.youtube.com/results?search_query=Blade+Runner+2049+trailer",
  },
  {
    id: 36,
    title: "Princess Mononoke",
    release_date: "July 12, 1997",
    release_year: 1997,
    duration: 134,
    classification: "PG-13",
    rating: 4.8,
    genres: ["Animation", "Adventure", "Fantasy"],
    synopsis:
      "On a journey to find the cure for a Tatarigami curse, Ashitaka finds himself in the middle of a war between the forest gods and a mining colony. In the struggle to reconcile the two sides, he also meets San, the Princess Mononoke.",
    poster_url: "https://wallpapercave.com/wp/wp4108308.jpg",
    hero_poster: "https://wallpapercave.com/wp/wp4108308.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=Princess+Mononoke+trailer",
  },
  {
    id: 37,
    title: "The Departed",
    release_date: "November 11, 2016",
    release_year: 2016,
    duration: 116,
    classification: "PG-13",
    rating: 4.4,
    genres: ["Drama", "Sci-Fi", "Thriller"],
    synopsis:
      "A linguist is recruited by the military to assist in translating alien communications after twelve mysterious spacecraft land around the world.",
    poster_url:
      "https://tse4.mm.bing.net/th/id/OIP.PGri9UDggRLzQ0yTf3wXpAHaKr?rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse4.mm.bing.net/th/id/OIP.PGri9UDggRLzQ0yTf3wXpAHaKr?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Departed+trailer",
  },
  {
    id: 38,
    title: "Kimetsu no Yaiba: Castle Infinity",
    release_date: "November 11, 2024",
    release_year: 2024,
    duration: 116,
    classification: "PG-13",
    rating: 4.8,
    genres: ["Drama", "Sci-Fi", "Thriller"],
    synopsis:
      "A linguist is recruited by the military to assist in translating alien communications after twelve mysterious spacecraft land around the world.",
    poster_url:
      "https://palomaynacho.com/wp-content/uploads/2024/06/Demon-Slayer-trilogia.jpg",
    hero_poster:
      "https://palomaynacho.com/wp-content/uploads/2024/06/Demon-Slayer-trilogia.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=Kimetsu+no+Yaiba+Castle+Infinity+trailer",
  },
  {
    id: 39,
    title: "Inception",
    release_date: "July 16, 2010",
    release_year: 2010,
    duration: 148,
    classification: "PG-13",
    rating: 4.8,
    genres: ["Sci-Fi", "Thriller", "Action"],
    synopsis:
      "Un ladrón especializado en el robo de secretos a través de los sueños acepta la tarea de implantar una idea en la mente de un objetivo.",
    poster_url:
      "https://th.bing.com/th/id/R.681b6734ab79ff82ba4d0ca3813e177e?rik=eaUSDjMti0HyUQ&riu=http%3a%2f%2fwww.impawards.com%2f2010%2fposters%2finception_ver12_xlg.jpg&ehk=1O091aue329B%2bftsggNyYINXbELp2FyYNGaO%2b4DhVwk%3d&risl=&pid=ImgRaw&r=0",
    hero_poster:
      "https://th.bing.com/th/id/R.681b6734ab79ff82ba4d0ca3813e177e?rik=eaUSDjMti0HyUQ&riu=http%3a%2f%2fwww.impawards.com%2f2010%2fposters%2finception_ver12_xlg.jpg&ehk=1O091aue329B%2bftsggNyYINXbELp2FyYNGaO%2b4DhVwk%3d&risl=&pid=ImgRaw&r=0",
    trailer_url:
      "https://www.youtube.com/results?search_query=Inception+trailer",
  },
  {
    id: 40,
    title: "The Dark Knight",
    release_date: "July 18, 2008",
    release_year: 2008,
    duration: 152,
    classification: "PG-13",
    rating: 4.9,
    genres: ["Action", "Crime", "Drama"],
    synopsis:
      "Batman debe enfrentar al anárquico Joker mientras Gotham cae en el caos y la moralidad se pone a prueba.",
    poster_url:
      "https://tse4.mm.bing.net/th/id/OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse4.mm.bing.net/th/id/OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Dark+Knight+trailer",
  },
  {
    id: 41,
    title: "Interstellar",
    release_date: "November 7, 2014",
    release_year: 2014,
    duration: 169,
    classification: "PG-13",
    rating: 4.7,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    synopsis:
      "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
    poster_url:
      "https://tse1.mm.bing.net/th/id/OIP.TEGLDc7Pa-UG-lEinC1sfwHaKe?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse1.mm.bing.net/th/id/OIP.TEGLDc7Pa-UG-lEinC1sfwHaKe?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=Interstellar+trailer",
  },
  {
    id: 42,
    title: "The Shawshank Redemption",
    release_date: "September 23, 1994",
    release_year: 1994,
    duration: 142,
    classification: "R",
    rating: 4.0,
    genres: ["Drama", "Crime"],
    synopsis:
      "La amistad entre dos reclusos y la esperanza frente a la injusticia en una prisión de máxima seguridad.",
    poster_url:
      "https://tse3.mm.bing.net/th/id/OIP.j9bxUofzBLpS1TLyH3RfogHaNr?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse3.mm.bing.net/th/id/OIP.j9bxUofzBLpS1TLyH3RfogHaNr?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=Shawshank+Redemption+trailer",
  },
  {
    id: 43,
    title: "The Prestige",
    release_date: "October 20, 2006",
    release_year: 2006,
    duration: 130,
    classification: "PG-13",
    rating: 4.5,
    genres: ["Drama", "Mystery", "Sci-Fi"],
    synopsis:
      "Dos magos rivales se enredan en una obsesión que los lleva a extremos peligrosos por el triunfo.",
    poster_url:
      "https://image.tmdb.org/t/p/original/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg",
    hero_poster:
      "https://image.tmdb.org/t/p/original/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Prestige+trailer",
  },
  {
    id: 44,
    title: "Whiplash",
    release_date: "October 10, 2014",
    release_year: 2014,
    duration: 107,
    classification: "R",
    rating: 4.6,
    genres: ["Drama", "Music"],
    synopsis:
      "Un joven baterista se enfrenta a un exigente profesor que lo empuja hasta sus límites para alcanzar la grandeza.",
    poster_url:
      "https://i.etsystatic.com/36067604/r/il/4355d2/4230665308/il_fullxfull.4230665308_r13v.jpg",
    hero_poster:
      "https://i.etsystatic.com/36067604/r/il/4355d2/4230665308/il_fullxfull.4230665308_r13v.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=Whiplash+trailer",
  },
  {
    id: 45,
    title: "Pan's Labyrinth",
    release_date: "October 11, 2006",
    release_year: 2006,
    duration: 118,
    classification: "R",
    rating: 4.4,
    genres: ["Fantasy", "War", "Drama"],
    synopsis:
      "En la posguerra, una niña descubre un mundo fantástico que esconde peligros y pruebas morales.",
    poster_url:
      "https://tse1.mm.bing.net/th/id/OIP.EHJob5nMrlGYJXOI1hvM2QHaK-?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse1.mm.bing.net/th/id/OIP.EHJob5nMrlGYJXOI1hvM2QHaK-?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=Pan%27s+Labyrinth+trailer",
  },
  {
    id: 46,
    title: "The Grand Budapest Hotel",
    release_date: "March 28, 2014",
    release_year: 2014,
    duration: 99,
    classification: "R",
    rating: 4.3,
    genres: ["Comedy", "Drama"],
    synopsis:
      "Las aventuras de un conserje legendario y su protegido en un hotel europeo entre guerras.",
    poster_url:
      "https://tse3.mm.bing.net/th/id/OIP.kV8gm_2FBlpMiY1B1c1mXAHaLH?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse3.mm.bing.net/th/id/OIP.kV8gm_2FBlpMiY1B1c1mXAHaLH?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=Grand+Budapest+Hotel+trailer",
  },
  {
    id: 47,
    title: "Your Name",
    release_date: "August 26, 2016",
    release_year: 2016,
    duration: 106,
    classification: "PG",
    rating: 4.7,
    genres: ["Anime", "Romance", "Fantasy"],
    synopsis:
      "Dos jóvenes misteriosamente intercambian cuerpos y buscan encontrarse a través del tiempo y la distancia.",
    poster_url:
      "https://tse1.explicit.bing.net/th/id/OIP.6pGfWHTpJysoZW0WNflgogHaLG?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse1.explicit.bing.net/th/id/OIP.6pGfWHTpJysoZW0WNflgogHaLG?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=Your+Name+trailer",
  },
  {
    id: 48,
    title: "Akira",
    release_date: "July 16, 1988",
    release_year: 1988,
    duration: 124,
    classification: "R",
    rating: 4.6,
    genres: ["Anime", "Sci-Fi", "Action"],
    synopsis:
      "En una Neo-Tokio postapocalíptica, poderes psíquicos amenazan con desatar una catástrofe inmensa.",
    poster_url:
      "https://tse4.mm.bing.net/th/id/OIP.-90AIj561hPhIk--iXBRXQHaLH?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse4.mm.bing.net/th/id/OIP.-90AIj561hPhIk--iXBRXQHaLH?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url: "https://www.youtube.com/results?search_query=Akira+trailer",
  },
  {
    id: 49,
    title: "A Silent Voice",
    release_date: "September 17, 2016",
    release_year: 2016,
    duration: 130,
    classification: "PG-13",
    rating: 4.5,
    genres: ["Anime", "Drama", "Romance"],
    synopsis:
      "Un exmatón busca redimirse contactando a la chica sorda que acosó en la escuela primaria.",
    poster_url:
      "https://i.pinimg.com/originals/dc/2c/c8/dc2cc82ff71a1a4beda337776c0795d7.jpg",
    hero_poster:
      "https://i.pinimg.com/originals/dc/2c/c8/dc2cc82ff71a1a4beda337776c0795d7.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=A+Silent+Voice+trailer",
  },
  {
    id: 50,
    title: "The Girl Who Leapt Through Time",
    release_date: "July 15, 2006",
    release_year: 2006,
    duration: 98,
    classification: "PG",
    rating: 4.4,
    genres: ["Anime", "Sci-Fi", "Romance"],
    synopsis:
      "Una chica adquiere la habilidad de saltar en el tiempo y descubre las consecuencias de cambiar pequeños momentos.",
    poster_url:
      "https://www.themoviedb.org/t/p/original/cEof6GvHcYLFzMFau82slLm9LOr.jpg",
    hero_poster:
      "https://www.themoviedb.org/t/p/original/cEof6GvHcYLFzMFau82slLm9LOr.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Girl+Who+Leapt+Through+Time+trailer",
  },
  {
    id: 51,
    title: "Gladiator",
    release_date: "May 5, 2000",
    release_year: 2000,
    duration: 155,
    classification: "R",
    rating: 4.6,
    genres: ["Action", "Drama", "History"],
    synopsis:
      "Un general romano traicionado busca venganza en la arena como gladiador, enfrentando al imperio y a su destino.",
    poster_url:
      "https://i.etsystatic.com/28209571/r/il/135806/3810657108/il_fullxfull.3810657108_dmpn.jpg",
    hero_poster:
      "https://i.etsystatic.com/28209571/r/il/135806/3810657108/il_fullxfull.3810657108_dmpn.jpg",
    trailer_url:
      "https://www.youtube.com/results?search_query=Gladiator+trailer",
  },
  {
    id: 52,
    title: "Joker",
    release_date: "October 4, 2019",
    release_year: 2019,
    duration: 122,
    classification: "R",
    rating: 4.3,
    genres: ["Drama", "Crime", "Thriller"],
    synopsis:
      "La transformación de Arthur Fleck, un comediante fracasado, en el infame Joker mientras la ciudad se desmorona a su alrededor.",
    poster_url:
      "https://tse1.mm.bing.net/th/id/OIP.kPXe-mDEdRAEL6G4TcwjYAHaLK?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse1.mm.bing.net/th/id/OIP.kPXe-mDEdRAEL6G4TcwjYAHaLK?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=Joker+2019+trailer",
  },
  {
    id: 53,
    title: "Cinema Paradiso",
    release_date: "November 17, 1988",
    release_year: 1988,
    duration: 155,
    classification: "PG",
    rating: 4.4,
    genres: ["Drama", "Romance"],
    synopsis:
      "Un niño italiano crece fascinado por el cine y la relación con el proyeccionista del pueblo marca su vida y su amor por la gran pantalla.",
    poster_url:
      "https://tse2.mm.bing.net/th/id/OIP.dugjSCaA1TdwrMJWkE-01wHaKt?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse2.mm.bing.net/th/id/OIP.dugjSCaA1TdwrMJWkE-01wHaKt?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=Cinema+Paradiso+trailer",
  },
  {
    id: 54,
    title: "The Lion King",
    release_date: "June 24, 1994",
    release_year: 1994,
    duration: 88,
    classification: "G",
    rating: 4.2,
    genres: ["Animation", "Adventure", "Drama"],
    synopsis:
      "La historia épica de Simba, un joven león que debe reclamar su lugar como rey después de la traición y la pérdida.",
    poster_url:
      "https://tse1.mm.bing.net/th/id/OIP.-OFkUcfCgtxiolQLHu63UQHaLA?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse1.mm.bing.net/th/id/OIP.-OFkUcfCgtxiolQLHu63UQHaLA?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Lion+King+trailer",
  },
  {
    id: 55,
    title: "Oldboy",
    release_date: "November 21, 2003",
    release_year: 2003,
    duration: 120,
    classification: "R",
    rating: 4.4,
    genres: ["Mystery", "Thriller", "Drama"],
    synopsis:
      "Después de quince años secuestrado sin explicación, un hombre busca venganza y descubre una verdad devastadora.",
    poster_url:
      "https://image.tmdb.org/t/p/original/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
    hero_poster:
      "https://image.tmdb.org/t/p/original/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
    trailer_url: "https://www.youtube.com/results?search_query=Oldboy+trailer",
  },
  {
    id: 56,
    title: "City of God",
    release_date: "February 13, 2004",
    release_year: 2004,
    duration: 130,
    classification: "R",
    rating: 4.5,
    genres: ["Crime", "Drama"],
    synopsis:
      "La cruda evolución del crimen en una favela brasileña vista a través de los ojos de dos jóvenes cuyos destinos divergen.",
    poster_url:
      "https://tse1.mm.bing.net/th/id/OIP.4el6fLLEkducyW72jY95kQHaJ0?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse1.mm.bing.net/th/id/OIP.4el6fLLEkducyW72jY95kQHaJ0?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=City+of+God+trailer",
  },
  {
    id: 57,
    title: "Blade Runner (1982)",
    release_date: "June 25, 1982",
    release_year: 1982,
    duration: 117,
    classification: "R",
    rating: 4.3,
    genres: ["Sci-Fi", "Mystery", "Thriller"],
    synopsis:
      "Un 'blade runner' cazador de replicantes se enfrenta a dilemas morales sobre qué significa ser humano en una ciudad distópica.",
    poster_url:
      "https://external-preview.redd.it/5jnrupZ6dta2rR2Ya8SY56Pu29mO9E-Kdp-X0ETIgdw.jpg?auto=webp&s=c8b73535a2597d156b9b1aed541a9725102869b9",
    hero_poster:
      "https://external-preview.redd.it/5jnrupZ6dta2rR2Ya8SY56Pu29mO9E-Kdp-X0ETIgdw.jpg?auto=webp&s=c8b73535a2597d156b9b1aed541a9725102869b9",
    trailer_url:
      "https://www.youtube.com/results?search_query=Blade+Runner+1982+trailer",
  },
  {
    id: 58,
    title: "Perfect Blue",
    release_date: "February 28, 1998",
    release_year: 1998,
    duration: 81,
    classification: "R",
    rating: 4.3,
    genres: ["Anime", "Thriller", "Psychological"],
    synopsis:
      "Una idol convertida en actriz sufre pérdida de identidad y paranoia cuando su vida pública y privada empiezan a mezclarse peligrosamente.",
    poster_url:
      "https://tse1.explicit.bing.net/th/id/OIP.IsTwfFf0O-FLrpRiPkXHggHaLH?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse1.explicit.bing.net/th/id/OIP.IsTwfFf0O-FLrpRiPkXHggHaLH?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=Perfect+Blue+trailer",
  },
  {
    id: 59,
    title: "The Departed",
    release_date: "October 6, 2006",
    release_year: 2006,
    duration: 151,
    classification: "R",
    rating: 4.4,
    genres: ["Crime", "Drama", "Thriller"],
    synopsis:
      "Policías encubiertos y soplones dentro de la mafia se enfrentan en un juego mortal de traición y poder en Boston.",
    poster_url:
      "https://tse2.mm.bing.net/th/id/OIP.ni5HBE4g_N012VwgwEfPsQHaLH?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse2.mm.bing.net/th/id/OIP.ni5HBE4g_N012VwgwEfPsQHaLH?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Departed+trailer",
  },
  {
    id: 60,
    title: "The Social Network",
    release_date: "October 1, 2010",
    release_year: 2010,
    duration: 120,
    classification: "PG-13",
    rating: 4.2,
    genres: ["Biography", "Drama"],
    synopsis:
      "La historia de la creación de Facebook y las disputas legales y personales que estallaron alrededor de su fundador.",
    poster_url:
      "https://tse3.mm.bing.net/th/id/OIP.0zT3zJdg9ZGL-0eKFBsFNgHaLH?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    hero_poster:
      "https://tse3.mm.bing.net/th/id/OIP.0zT3zJdg9ZGL-0eKFBsFNgHaLH?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer_url:
      "https://www.youtube.com/results?search_query=The+Social+Network+trailer",
  },
];

const reviewsMovie = {
  "Ready Player One": [
    {
      username: "Monkey D. Luffy",
      date: "March 15, 2024",
      rating: 4.2,
      comment:
        "A visual masterpiece that perfectly captures the spirit of gaming culture. Spielberg's direction brings the virtual world to life in spectacular fashion.",
      helpful: 423,
      replies: 476,
      avatar:
        "https://i.pinimg.com/1200x/92/23/4a/92234a0d461079114707be651ed6ff19.jpg",
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
  ],
  "John Wick": [
    {
      username: "Viktor Steele",
      date: "June 10, 2023",
      rating: 4.7,
      comment:
        "Keanu Reeves is a force of nature! The action is relentless, and the world-building around the assassins is top-notch.",
      helpful: 650,
      replies: 320,
      avatar:
        "https://i.pinimg.com/736x/12/ab/34/12ab34cd567890ef1234567890abcdef.jpg",
    },
    {
      username: "Luna Vega",
      date: "July 5, 2023",
      rating: 4.3,
      comment:
        "Stylish and brutal. The fight choreography is insane, though the plot is a bit thin. Still, I couldn’t look away!",
      helpful: 480,
      replies: 210,
      avatar:
        "https://i.pinimg.com/736x/56/78/90/567890ab1234567890cdef1234567890.jpg",
    },
    {
      username: "Jaxon Holt",
      date: "August 1, 2023",
      rating: 4.0,
      comment:
        "Pure adrenaline from start to finish. The dog subplot hit me hard, but it’s what makes John Wick so iconic.",
      helpful: 395,
      replies: 175,
      avatar:
        "https://i.pinimg.com/736x/78/90/ab/7890ab1234567890cdef1234567890ab.jpg",
    },
  ],
  "Baby Driver": [
    {
      username: "Zoe Harper",
      date: "September 12, 2023",
      rating: 4.4,
      comment:
        "The soundtrack drives this movie! Edgar Wright’s direction and the perfectly synced action make it a thrilling ride.",
      helpful: 510,
      replies: 260,
      avatar:
        "https://i.pinimg.com/736x/34/56/78/345678cd901234567890abcdef123456.jpg",
    },
    {
      username: "Miles Cruz",
      date: "October 3, 2023",
      rating: 4.1,
      comment:
        "Ansel Elgort nails it as Baby. The car chases are epic, but the romance felt a bit rushed for me.",
      helpful: 420,
      replies: 190,
      avatar:
        "https://i.pinimg.com/736x/90/ab/cd/90abcd1234567890cdef1234567890ab.jpg",
    },
    {
      username: "Tara Quinn",
      date: "November 15, 2023",
      rating: 4.6,
      comment:
        "A masterpiece of style and sound. Every scene feels like a music video, but with heart and stakes.",
      helpful: 580,
      replies: 300,
      avatar:
        "https://i.pinimg.com/736x/ab/cd/ef/abcdef1234567890cdef1234567890ab.jpg",
    },
  ],
  "Mad Max: Fury Road": [
    {
      username: "Rex Fury",
      date: "January 20, 2023",
      rating: 4.8,
      comment:
        "Non-stop chaos in the best way possible. Charlize Theron as Furiosa steals the show. A visual and emotional triumph.",
      helpful: 720,
      replies: 400,
      avatar:
        "https://i.pinimg.com/736x/cd/ef/12/cdef1234567890abcdef1234567890ab.jpg",
    },
    {
      username: "Nia Blaze",
      date: "February 10, 2023",
      rating: 4.5,
      comment:
        "The practical effects and world-building are unreal. It’s like a fever dream of action and grit.",
      helpful: 600,
      replies: 310,
      avatar:
        "https://i.pinimg.com/736x/ef/12/34/ef1234567890abcdef1234567890abcd.jpg",
    },
    {
      username: "Gus Vroom",
      date: "March 5, 2023",
      rating: 4.3,
      comment:
        "Insane action and stunning visuals, but I wanted more backstory for Max. Still, what a wild ride!",
      helpful: 490,
      replies: 220,
      avatar:
        "https://i.pinimg.com/736x/12/34/56/1234567890abcdef1234567890abcdef.jpg",
    },
  ],
  "The Mitchells vs. the Machines": [
    {
      username: "Ella Sparks",
      date: "April 15, 2024",
      rating: 4.3,
      comment:
        "Hilarious and heartfelt! The animation is vibrant, and the family dynamics are so relatable.",
      helpful: 450,
      replies: 230,
      avatar:
        "https://i.pinimg.com/736x/34/56/78/34567890abcdef1234567890abcdef12.jpg",
    },
    {
      username: "Liam Brooks",
      date: "May 1, 2024",
      rating: 4.0,
      comment:
        "A fun, chaotic adventure with great humor. Some jokes didn’t land for me, but the robot apocalypse was epic.",
      helpful: 380,
      replies: 180,
      avatar:
        "https://i.pinimg.com/736x/56/78/90/567890abcdef1234567890abcdef1234.jpg",
    },
    {
      username: "Ava Chen",
      date: "June 10, 2024",
      rating: 4.6,
      comment:
        "Loved the quirky animation and the message about family. The Furby scene had me in tears laughing!",
      helpful: 520,
      replies: 270,
      avatar:
        "https://i.pinimg.com/736x/78/90/ab/7890abcdef1234567890abcdef123456.jpg",
    },
  ],
  "Deadpool 2": [
    {
      username: "Wade Wilson Jr.",
      date: "July 20, 2023",
      rating: 4.4,
      comment:
        "Ryan Reynolds is perfect as Deadpool. The humor and action are dialed up, and Cable is a great addition.",
      helpful: 560,
      replies: 290,
      avatar:
        "https://i.pinimg.com/736x/ab/cd/ef/abcdef1234567890abcdef1234567890.jpg",
    },
    {
      username: "Chloe Fang",
      date: "August 5, 2023",
      rating: 4.1,
      comment:
        "Laughed so hard I cried. The meta jokes are gold, but some felt a bit overdone. Still a blast!",
      helpful: 430,
      replies: 200,
      avatar:
        "https://i.pinimg.com/736x/cd/ef/12/cdef1234567890abcdef1234567890ab.jpg",
    },
    {
      username: "Tyler Zane",
      date: "September 1, 2023",
      rating: 4.5,
      comment:
        "Action, humor, and heart. The X-Force scenes were hilarious, and the soundtrack is killer.",
      helpful: 510,
      replies: 250,
      avatar:
        "https://i.pinimg.com/736x/ef/12/34/ef1234567890abcdef1234567890abcd.jpg",
    },
  ],
  "Kingsman: The Secret Service": [
    {
      username: "James Bonded",
      date: "October 10, 2023",
      rating: 4.6,
      comment:
        "A fresh take on the spy genre! The action is over-the-top, and Colin Firth is surprisingly badass.",
      helpful: 590,
      replies: 310,
      avatar:
        "https://i.pinimg.com/736x/12/34/56/1234567890abcdef1234567890abcdef.jpg",
    },
    {
      username: "Sophie Lane",
      date: "November 5, 2023",
      rating: 4.2,
      comment:
        "Stylish and fun with great fight scenes. The church sequence is insane, but the humor didn’t always land.",
      helpful: 460,
      replies: 220,
      avatar:
        "https://i.pinimg.com/736x/34/56/78/34567890abcdef1234567890abcdef12.jpg",
    },
    {
      username: "Evan Cole",
      date: "December 1, 2023",
      rating: 4.4,
      comment:
        "Taron Egerton shines as Eggsy. The mix of humor, action, and spy gadgets is perfection.",
      helpful: 500,
      replies: 240,
      avatar:
        "https://i.pinimg.com/736x/56/78/90/567890abcdef1234567890abcdef1234.jpg",
    },
  ],
  "Bullet Train": [
    {
      username: "Ryu Kimura",
      date: "January 15, 2024",
      rating: 4.3,
      comment:
        "Brad Pitt is effortlessly cool. The action is wild, and the humor keeps it light. Loved the cameos!",
      helpful: 530,
      replies: 280,
      avatar:
        "https://i.pinimg.com/736x/78/90/ab/7890abcdef1234567890abcdef123456.jpg",
    },
    {
      username: "Maya Holt",
      date: "February 10, 2024",
      rating: 4.0,
      comment:
        "Fast-paced and fun, but the plot gets a bit messy. The ensemble cast makes it worth watching.",
      helpful: 410,
      replies: 190,
      avatar:
        "https://i.pinimg.com/736x/ab/cd/ef/abcdef1234567890abcdef1234567890.jpg",
    },
    {
      username: "Leo Sparks",
      date: "March 5, 2024",
      rating: 4.5,
      comment:
        "A chaotic, stylish ride. The train setting and quirky characters make every scene pop.",
      helpful: 490,
      replies: 230,
      avatar:
        "https://i.pinimg.com/736x/cd/ef/12/cdef1234567890abcdef1234567890ab.jpg",
    },
  ],
  "Murder on the Orient Express": [
    {
      username: "Clara Poirot",
      date: "April 10, 2024",
      rating: 4.1,
      comment:
        "A classic mystery brought to life with stunning visuals. Kenneth Branagh’s Poirot is captivating.",
      helpful: 470,
      replies: 240,
      avatar:
        "https://i.pinimg.com/736x/ef/12/34/ef1234567890abcdef1234567890abcd.jpg",
    },
    {
      username: "Henry Walsh",
      date: "May 5, 2024",
      rating: 3.8,
      comment:
        "Great cast and atmosphere, but the pacing felt slow at times. Still, a solid whodunit.",
      helpful: 390,
      replies: 180,
      avatar:
        "https://i.pinimg.com/736x/12/34/56/1234567890abcdef1234567890abcdef.jpg",
    },
    {
      username: "Isabelle Grey",
      date: "June 1, 2024",
      rating: 4.4,
      comment:
        "Loved the elegance and suspense. The train setting and costumes are a feast for the eyes.",
      helpful: 510,
      replies: 260,
      avatar:
        "https://i.pinimg.com/736x/34/56/78/34567890abcdef1234567890abcdef12.jpg",
    },
  ],
  "Knives Out": [
    {
      username: "Marta Sleuth",
      date: "July 15, 2023",
      rating: 4.7,
      comment:
        "Rian Johnson reinvents the murder mystery! Daniel Craig and Ana de Armas are phenomenal.",
      helpful: 680,
      replies: 350,
      avatar:
        "https://i.pinimg.com/736x/56/78/90/567890abcdef1234567890abcdef1234.jpg",
    },
    {
      username: "Owen Finch",
      date: "August 10, 2023",
      rating: 4.4,
      comment:
        "Witty, clever, and full of twists. The ensemble cast is perfect, though some reveals were predictable.",
      helpful: 520,
      replies: 270,
      avatar:
        "https://i.pinimg.com/736x/78/90/ab/7890abcdef1234567890abcdef123456.jpg",
    },
    {
      username: "Grace Lin",
      date: "September 5, 2023",
      rating: 4.6,
      comment:
        "A modern classic. The humor, mystery, and family drama blend so well. Can’t wait for the sequel!",
      helpful: 590,
      replies: 300,
      avatar:
        "https://i.pinimg.com/736x/ab/cd/ef/abcdef1234567890abcdef1234567890.jpg",
    },
  ],
  "Now You See Me": [
    {
      username: "HoudiniFan23",
      date: "October 10, 2023",
      rating: 4.2,
      comment:
        "Magic and heists? Count me in! The twists kept me guessing, and the cast has great chemistry.",
      helpful: 460,
      replies: 230,
      avatar:
        "https://i.pinimg.com/736x/cd/ef/12/cdef1234567890abcdef1234567890ab.jpg",
    },
    {
      username: "Emma Stone",
      date: "November 5, 2023",
      rating: 3.9,
      comment:
        "Super fun and flashy, but the plot gets convoluted. Still, the magic tricks are a blast to watch.",
      helpful: 400,
      replies: 190,
      avatar:
        "https://i.pinimg.com/736x/ef/12/34/ef1234567890abcdef1234567890abcd.jpg",
    },
    {
      username: "Noah Blake",
      date: "December 1, 2023",
      rating: 4.4,
      comment:
        "Loved the energy and cleverness. The final twist blew my mind, even if it’s a bit far-fetched.",
      helpful: 480,
      replies: 250,
      avatar:
        "https://i.pinimg.com/736x/12/34/56/1234567890abcdef1234567890abcdef.jpg",
    },
  ],
  "The Truman Show": [
    {
      username: "Elliot Truth",
      date: "January 15, 2024",
      rating: 4.8,
      comment:
        "Jim Carrey’s best role. A brilliant commentary on reality, freedom, and media. Still relevant today.",
      helpful: 710,
      replies: 380,
      avatar:
        "https://i.pinimg.com/736x/34/56/78/34567890abcdef1234567890abcdef12.jpg",
    },
    {
      username: "Sarah Dawn",
      date: "February 10, 2024",
      rating: 4.5,
      comment:
        "Thought-provoking and emotional. The concept is genius, though the pacing slows a bit in the middle.",
      helpful: 550,
      replies: 290,
      avatar:
        "https://i.pinimg.com/736x/56/78/90/567890abcdef1234567890abcdef1234.jpg",
    },
    {
      username: "Lucas Wren",
      date: "March 5, 2024",
      rating: 4.7,
      comment:
        "A masterpiece of storytelling. The way it balances humor, drama, and philosophy is incredible.",
      helpful: 620,
      replies: 310,
      avatar:
        "https://i.pinimg.com/736x/78/90/ab/7890abcdef1234567890abcdef123456.jpg",
    },
  ],
};

const actorsMovie = {
  "Ready Player One": [
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
    {
      name: "T. J. Miller",
      character: "I-ROK",
      urlPhoto:
        "https://tse4.mm.bing.net/th/id/OIP.s-jPNwVzq6FctX7yZTy4cQHaJ4?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ],
  "John Wick": [
    {
      name: "Keanu Reeves",
      character: "John Wick",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODczMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_UY1200_.jpg",
    },
    {
      name: "Michael Nyqvist",
      character: "Viggo Tarasov",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA3OTQ1MjcwNl5BMl5BanBnXkFtZTcwODkwNzgxOA@._V1_UY1200_.jpg",
    },
    {
      name: "Alfie Allen",
      character: "Iosef Tarasov",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTk3NjM2MDI0NF5BMl5BanBnXkFtZTgwNTQ0NzE4MDE@._V1_UY1200_.jpg",
    },
    {
      name: "Willem Dafoe",
      character: "Marcus",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTM3NTE@._V1_UY1200_.jpg",
    },
    {
      name: "John Leguizamo",
      character: "Aurelio",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTQ2NzA0NjE0M15BMl5BanBnXkFtZTcwNzU5NTcwMw@._V1_UY1200_.jpg",
    },
    {
      name: "Ian McShane",
      character: "Winston",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDMyMTc2MQ@._V1_UY1200_.jpg",
    },
  ],
  "Baby Driver": [
    {
      name: "Ansel Elgort",
      character: "Baby",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjAwNjM5ODQyOV5BMl5BanBnXkFtZTgwNzY0NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Kevin Spacey",
      character: "Doc",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTQyMTM3MTY2MF5BMl5BanBnXkFtZTcwMjk4NjA4Mg@._V1_UY1200_.jpg",
    },
    {
      name: "Lily James",
      character: "Debora",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTk0NzI5MTYxMF5BMl5BanBnXkFtZTgwNTE3NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Jon Hamm",
      character: "Buddy",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTM0NjI3NjYxN15BMl5BanBnXkFtZTcwNjA0NzY2Mw@._V1_UY1200_.jpg",
    },
    {
      name: "Jamie Foxx",
      character: "Bats",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwNDg0NzcxMw@._V1_UY1200_.jpg",
    },
    {
      name: "Eiza González",
      character: "Darling",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTg0OTY4ODMyOF5BMl5BanBnXkFtZTgwNzY0NTc4NTM@._V1_UY1200_.jpg",
    },
  ],
  "Mad Max: Fury Road": [
    {
      name: "Tom Hardy",
      character: "Max Rockatansky",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTQ2MTEyMjMzMV5BMl5BanBnXkFtZTgwODE3NDM0MjE@._V1_UY1200_.jpg",
    },
    {
      name: "Charlize Theron",
      character: "Imperator Furiosa",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTUyMTE0NjUxNV5BMl5BanBnXkFtZTcwOTA1ODc5NA@._V1_UY1200_.jpg",
    },
    {
      name: "Nicholas Hoult",
      character: "Nux",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA3NDM5MDE3NF5BMl5BanBnXkFtZTgwNzQwNjE4MDE@._V1_UY1200_.jpg",
    },
    {
      name: "Hugh Keays-Byrne",
      character: "Immortan Joe",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjE0NjIxODMxNF5BMl5BanBnXkFtZTcwMDM1OTYxOA@._V1_UY1200_.jpg",
    },
    {
      name: "Rosie Huntington-Whiteley",
      character: "The Splendid Angharad",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTg0OTY4ODMyOF5BMl5BanBnXkFtZTgwNzY0NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Zoë Kravitz",
      character: "Toast the Knowing",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA5Nzg1NjM0NV5BMl5BanBnXkFtZTgwOTk3MzYxMDE@._V1_UY1200_.jpg",
    },
  ],
  "The Mitchells vs. the Machines": [
    {
      name: "Abbi Jacobson",
      character: "Katie Mitchell (voice)",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTg3NzY2NjU3NF5BMl5BanBnXkFtZTgwNjQ4ODc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Danny McBride",
      character: "Rick Mitchell (voice)",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA3NDM5MDE3NF5BMl5BanBnXkFtZTgwNzQwNjE4MDE@._V1_UY1200_.jpg",
    },
    {
      name: "Maya Rudolph",
      character: "Linda Mitchell (voice)",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDMyMTc2MQ@._V1_UY1200_.jpg",
    },
    {
      name: "Mike Rianda",
      character: "Aaron Mitchell (voice)",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTg0OTY4ODMyOF5BMl5BanBnXkFtZTgwNzY0NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Eric André",
      character: "Mark Bowman (voice)",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTk0NzI5MTYxMF5BMl5BanBnXkFtZTgwNTE3NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Olivia Colman",
      character: "PAL (voice)",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA5NzA1NjM0NV5BMl5BanBnXkFtZTgwOTk3MzYxMDE@._V1_UY1200_.jpg",
    },
  ],
  "Deadpool 2": [
    {
      name: "Ryan Reynolds",
      character: "Wade Wilson / Deadpool",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTk1MjE0Nzk1M15BMl5BanBnXkFtZTgwOTU4NTg4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Josh Brolin",
      character: "Cable",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTk1MjE0Nzk1M15BMl5BanBnXkFtZTgwOTU4NTg4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Morena Baccarin",
      character: "Vanessa",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTk3NjM2MDI0NF5BMl5BanBnXkFtZTgwNTQ0NzE4MDE@._V1_UY1200_.jpg",
    },
    {
      name: "Zazie Beetz",
      character: "Domino",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTg0OTY4ODMyOF5BMl5BanBnXkFtZTgwNzY0NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Julian Dennison",
      character: "Firefist",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA5NzA1NjM0NV5BMl5BanBnXkFtZTgwOTk3MzYxMDE@._V1_UY1200_.jpg",
    },
    {
      name: "T.J. Miller",
      character: "Weasel",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTU1NjQ2OTI2MF5BMl5BanBnXkFtZTcwNzY5NjE4OA@._V1_UY1200_.jpg",
    },
  ],
  "Kingsman: The Secret Service": [
    {
      name: "Taron Egerton",
      character: "Gary 'Eggsy' Unwin",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTkwMTA0NTY5NF5BMl5BanBnXkFtZTgwNzM5NjI3MjE@._V1_UY1200_.jpg",
    },
    {
      name: "Colin Firth",
      character: "Harry Hart / Galahad",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTc4NjA2OTMwMl5BMl5BanBnXkFtZTcwNzA4NzY2Mw@._V1_UY1200_.jpg",
    },
    {
      name: "Samuel L. Jackson",
      character: "Valentine",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTQ2MjgyOTQ5Ml5BMl5BanBnXkFtZTcwNjY2NjA4Mg@._V1_UY1200_.jpg",
    },
    {
      name: "Mark Strong",
      character: "Merlin",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTk0NzI5MTYxMF5BMl5BanBnXkFtZTgwNTE3NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Sophie Cookson",
      character: "Roxy",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA3NDM5MDE3NF5BMl5BanBnXkFtZTgwNzQwNjE4MDE@._V1_UY1200_.jpg",
    },
    {
      name: "Michael Caine",
      character: "Arthur",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTQyMTM3MTY2MF5BMl5BanBnXkFtZTcwMjk4NjA4Mg@._V1_UY1200_.jpg",
    },
  ],
  "Bullet Train": [
    {
      name: "Brad Pitt",
      character: "Ladybug",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTM2NzU3MF5BMl5BanBnXkFtZTgwNzI0NjE4MDE@._V1_UY1200_.jpg",
    },
    {
      name: "Joey King",
      character: "Prince",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTg0OTY4ODMyOF5BMl5BanBnXkFtZTgwNzY0NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Aaron Taylor-Johnson",
      character: "Tangerine",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA5NzA1NjM0NV5BMl5BanBnXkFtZTgwOTk3MzYxMDE@._V1_UY1200_.jpg",
    },
    {
      name: "Brian Tyree Henry",
      character: "Lemon",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTk0NzI5MTYxMF5BMl5BanBnXkFtZTgwNTE3NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Andrew Koji",
      character: "Kimura",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTg3NzY2NjU3NF5BMl5BanBnXkFtZTgwNjQ4ODc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Hiroyuki Sanada",
      character: "The Elder",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDMyMTc2MQ@._V1_UY1200_.jpg",
    },
  ],
  "Murder on the Orient Express": [
    {
      name: "Kenneth Branagh",
      character: "Hercule Poirot",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTk0NzI5MTYxMF5BMl5BanBnXkFtZTgwNTE3NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Penélope Cruz",
      character: "Pilar Estravados",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTQzNjMyMzI4N15BMl5BanBnXkFtZTcwMzY0NzM2Mw@._V1_UY1200_.jpg",
    },
    {
      name: "Willem Dafoe",
      character: "Gerhard Hardman",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTM3NTE@._V1_UY1200_.jpg",
    },
    {
      name: "Judi Dench",
      character: "Princess Dragomiroff",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTQyMTM3MTY2MF5BMl5BanBnXkFtZTcwMjk4NjA4Mg@._V1_UY1200_.jpg",
    },
    {
      name: "Johnny Depp",
      character: "Ratchett",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTM0NzYzNDgxMl5BMl5BanBnXkFtZTcwNDg0NzcxMw@._V1_UY1200_.jpg",
    },
    {
      name: "Michelle Pfeiffer",
      character: "Caroline Hubbard",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTU1NjQ2OTI2MF5BMl5BanBnXkFtZTcwNzY5NjE4OA@._V1_UY1200_.jpg",
    },
  ],
  "Knives Out": [
    {
      name: "Daniel Craig",
      character: "Benoit Blanc",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTM2NzU3MF5BMl5BanBnXkFtZTgwNzI0NjE4MDE@._V1_UY1200_.jpg",
    },
    {
      name: "Ana de Armas",
      character: "Marta Cabrera",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTg0OTY4ODMyOF5BMl5BanBnXkFtZTgwNzY0NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Chris Evans",
      character: "Ransom Drysdale",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTk3NjM2MDI0NF5BMl5BanBnXkFtZTgwNTQ0NzE4MDE@._V1_UY1200_.jpg",
    },
    {
      name: "Jamie Lee Curtis",
      character: "Linda Drysdale",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTQyMTM3MTY2MF5BMl5BanBnXkFtZTcwMjk4NjA4Mg@._V1_UY1200_.jpg",
    },
    {
      name: "Michael Shannon",
      character: "Walt Thrombey",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTU1NjQ2OTI2MF5BMl5BanBnXkFtZTcwNzY5NjE4OA@._V1_UY1200_.jpg",
    },
    {
      name: "Toni Collette",
      character: "Joni Thrombey",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA5NzA1NjM0NV5BMl5BanBnXkFtZTgwOTk3MzYxMDE@._V1_UY1200_.jpg",
    },
  ],
  "Now You See Me": [
    {
      name: "Jesse Eisenberg",
      character: "J. Daniel Atlas",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA3NDM5MDE3NF5BMl5BanBnXkFtZTgwNzQwNjE4MDE@._V1_UY1200_.jpg",
    },
    {
      name: "Mark Ruffalo",
      character: "Dylan Rhodes",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODczMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_UY1200_.jpg",
    },
    {
      name: "Woody Harrelson",
      character: "Merritt McKinney",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTk0NzI5MTYxMF5BMl5BanBnXkFtZTgwNTE3NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Isla Fisher",
      character: "Henley Reeves",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTg0OTY4ODMyOF5BMl5BanBnXkFtZTgwNzY0NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Dave Franco",
      character: "Jack Wilder",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA5NzA1NjM0NV5BMl5BanBnXkFtZTgwOTk3MzYxMDE@._V1_UY1200_.jpg",
    },
    {
      name: "Mélanie Laurent",
      character: "Alma Dray",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDMyMTc2MQ@._V1_UY1200_.jpg",
    },
  ],
  "The Truman Show": [
    {
      name: "Jim Carrey",
      character: "Truman Burbank",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTQyMTM3MTY2MF5BMl5BanBnXkFtZTcwMjk4NjA4Mg@._V1_UY1200_.jpg",
    },
    {
      name: "Laura Linney",
      character: "Meryl Burbank / Hannah Gill",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTU1NjQ2OTI2MF5BMl5BanBnXkFtZTcwNzY5NjE4OA@._V1_UY1200_.jpg",
    },
    {
      name: "Noah Emmerich",
      character: "Marlon",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA3NDM5MDE3NF5BMl5BanBnXkFtZTgwNzQwNjE4MDE@._V1_UY1200_.jpg",
    },
    {
      name: "Natascha McElhone",
      character: "Lauren / Sylvia",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTk0NzI5MTYxMF5BMl5BanBnXkFtZTgwNTE3NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Ed Harris",
      character: "Christof",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMTg0OTY4ODMyOF5BMl5BanBnXkFtZTgwNzY0NTc4NTM@._V1_UY1200_.jpg",
    },
    {
      name: "Holland Taylor",
      character: "Truman's Mother",
      urlPhoto:
        "https://m.media-amazon.com/images/M/MV5BMjA5NzA1NjM0NV5BMl5BanBnXkFtZTgwOTk3MzYxMDE@._V1_UY1200_.jpg",
    },
  ],
};

const mediaMovie = {
  "Ready Player One": [
    {
      title: "Ready Player One",
      urlPoster:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/readyplayerone-56b7d103-d459-4ff3-89ac-e6342be40e01.jpg",
      urlMedia: "https://www.youtube.com/watch?v=iQR8Zs0zid0",
    },
    {
      title: "Van Halen - Jump",
      urlPoster:
        "https://i.ytimg.com/vi/SwYN7mTi6HM/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCzSrgtGjv6e1fmxMIzXsxxwlxg7A",
      urlMedia:
        "https://www.youtube.com/watch?v=SwYN7mTi6HM&list=PL93gQNIoJIvXjoA4GhU7KghbRRLaQY9MR",
    },
    {
      title: "a-ha - Take On Me",
      urlPoster:
        "https://i.ytimg.com/vi/djV11Xbc914/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAQwo9yAPdIq9l3Z7w40_sAH6_uQw",
      urlMedia:
        "https://www.youtube.com/watch?v=djV11Xbc914&list=PL93gQNIoJIvXjoA4GhU7KghbRRLaQY9MR&index=4",
    },
    {
      title: "Bee Gees - Stayin' Alive",
      urlPoster:
        "https://i.ytimg.com/vi/fNFzfwLM72c/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLAEJd8FLCCljKGV0DCkfHWbhZ33Xw",
      urlMedia:
        "https://www.youtube.com/watch?v=fNFzfwLM72c&list=PL93gQNIoJIvXjoA4GhU7KghbRRLaQY9MR&index=8",
    },
  ],
  "Baby Driver": [
    {
      title: "Baby Driver - Official Trailer",
      urlPoster:
        "https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_FMjpg_UX1000_.jpg",
      urlMedia: "https://www.youtube.com/watch?v=z2z857RSfhk",
    },
    {
      title: "Simon & Garfunkel - Baby Driver",
      urlPoster: "https://i.ytimg.com/vi/kIDWGj84sRo/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=kIDWGj84sRo",
    },
    {
      title: "The Jon Spencer Blues Explosion - Bellbottoms",
      urlPoster: "https://i.ytimg.com/vi/0G3yTcfV3EM/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=0G3yTcfV3EM",
    },
    {
      title: "Focus - Hocus Pocus",
      urlPoster: "https://i.ytimg.com/vi/g4ouPGGLI6Q/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=g4ouPGGLI6Q",
    },
  ],
  "Mad Max: Fury Road": [
    {
      title: "Mad Max: Fury Road - Official Trailer",
      urlPoster:
        "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      urlMedia: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
    },
    {
      title: "Tom Holkenborg (Junkie XL) - Brothers in Arms",
      urlPoster: "https://i.ytimg.com/vi/5hEM0BsaCxQ/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=5hEM0BsaCxQ",
    },
    {
      title: "Tom Holkenborg (Junkie XL) - Immortan’s Theme",
      urlPoster: "https://i.ytimg.com/vi/Zh1h49dWe2Q/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=Zh1h49dWe2Q",
    },
    {
      title: "Tom Holkenborg (Junkie XL) - Escape",
      urlPoster: "https://i.ytimg.com/vi/0C-jBBkgFJI/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=0C-jBBkgFJI",
    },
  ],
  "The Mitchells vs. the Machines": [
    {
      title: "The Mitchells vs. the Machines - Official Trailer",
      urlPoster:
        "https://m.media-amazon.com/images/M/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1YmQtOWNjZTYxZjk0N2I5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      urlMedia: "https://www.youtube.com/watch?v=_akwfRuL4os",
    },
    {
      title: "Mark Mothersbaugh - On the Verge of Destruction",
      urlPoster: "https://i.ytimg.com/vi/1J8Y1p3C7kM/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=1J8Y1p3C7kM",
    },
    {
      title: "The Romantics - What I Like About You",
      urlPoster: "https://i.ytimg.com/vi/saO-Ko6v-ck/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=saO-Ko6v-ck",
    },
    {
      title: "Talking Heads - Once in a Lifetime",
      urlPoster: "https://i.ytimg.com/vi/I1wg1DNHbNU/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=I1wg1DNHbNU",
    },
  ],
  "Deadpool 2": [
    {
      title: "Deadpool 2 - Official Trailer",
      urlPoster:
        "https://m.media-amazon.com/images/M/MV5BMjI0NTQ3NjE5Nl5BMl5BanBnXkFtZTgwNjg2ODA0NDM@._V1_FMjpg_UX1000_.jpg",
      urlMedia: "https://www.youtube.com/watch?v=D86RtevtfrA",
    },
    {
      title: "Celine Dion - Ashes",
      urlPoster: "https://i.ytimg.com/vi/CX11yw6YL1w/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=CX11yw6YL1w",
    },
    {
      title: "Dolly Parton - 9 to 5",
      urlPoster: "https://i.ytimg.com/vi/UbxUSsFXYo4/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=UbxUSsFXYo4",
    },
    {
      title: "a-ha - Take On Me",
      urlPoster: "https://i.ytimg.com/vi/djV11Xbc914/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=djV11Xbc914",
    },
  ],
  "Kingsman: The Secret Service": [
    {
      title: "Kingsman: The Secret Service - Official Trailer",
      urlPoster:
        "https://m.media-amazon.com/images/M/MV5BYTM3ZTllNzItNTNmOS00NzJiLTg1MWMtMjMxNDM0NmJhODJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      urlMedia: "https://www.youtube.com/watch?v=kl8F-8tR8to",
    },
    {
      title: "Lynyrd Skynyrd - Free Bird",
      urlPoster: "https://i.ytimg.com/vi/D0W1v0kOELA/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=D0W1v0kOELA",
    },
    {
      title: "Dire Straits - Money for Nothing",
      urlPoster: "https://i.ytimg.com/vi/wTP2RUD_cL0/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=wTP2RUD_cL0",
    },
    {
      title: "Edward Elgar - Pomp and Circumstance",
      urlPoster: "https://i.ytimg.com/vi/ALqOKq0C8Z8/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=ALqOKq0C8Z8",
    },
  ],
  "Bullet Train": [
    {
      title: "Bullet Train - Official Trailer",
      urlPoster:
        "https://m.media-amazon.com/images/M/MV5BMDU2YTI0NmUtZDRmNS00NWZmLTk5YzMtMTU3ZmY5YzA2YzVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      urlMedia: "https://www.youtube.com/watch?v=0IOsk2Vlc4o",
    },
    {
      title: "Bee Gees - Stayin' Alive",
      urlPoster: "https://i.ytimg.com/vi/fNFzfwLM72c/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=fNFzfwLM72c",
    },
    {
      title: "Engelbert Humperdinck - I'm a Better Man",
      urlPoster: "https://i.ytimg.com/vi/0g7KawdsVSQ/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=0g7KawdsVSQ",
    },
    {
      title: "Miki Asakura - La La Love (created for Bullet Train)",
      urlPoster: "https://i.ytimg.com/vi/5M_4fF9HRiM/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=5M_4fF9HRiM",
    },
  ],
  "Murder on the Orient Express": [
    {
      title: "Murder on the Orient Express - Official Trailer",
      urlPoster:
        "https://m.media-amazon.com/images/M/MV5BNGYxMTA0M2EtY2JmNC00YzM2LWI3NzEtMzU4MmM0M2ExNzVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      urlMedia: "https://www.youtube.com/watch?v=Mq4m3yAoW8E",
    },
    {
      title: "Patrick Doyle - Orient Express Suite",
      urlPoster: "https://i.ytimg.com/vi/0z1s1X0k4bQ/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=0z1s1X0k4bQ",
    },
    {
      title: "Michelle Pfeiffer - Never Forget",
      urlPoster: "https://i.ytimg.com/vi/2oZ0a_3X6zg/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=2oZ0a_3X6zg",
    },
    {
      title: "Patrick Doyle - Justice",
      urlPoster: "https://i.ytimg.com/vi/Y2F1gJWr2sM/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=Y2F1gJWr2sM",
    },
  ],
  "Knives Out": [
    {
      title: "Knives Out - Official Trailer",
      urlPoster:
        "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      urlMedia: "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
    },
    {
      title: "Nathan Johnson - Knives Out! (String Quartet in G Minor)",
      urlPoster: "https://i.ytimg.com/vi/0eD7O3v0mUg/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=0eD7O3v0mUg",
    },
    {
      title: "The Rolling Stones - Sweet Virginia",
      urlPoster: "https://i.ytimg.com/vi/1B3SHEar8gQ/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=1B3SHEar8gQ",
    },
    {
      title: "Gordon Lightfoot - Sundown",
      urlPoster: "https://i.ytimg.com/vi/A3hLqAzoDb0/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=A3hLqAzoDb0",
    },
  ],
  "Now You See Me": [
    {
      title: "Now You See Me - Official Trailer",
      urlPoster:
        "https://m.media-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTcwMzQ5NjA3OQ@@._V1_FMjpg_UX1000_.jpg",
      urlMedia: "https://www.youtube.com/watch?v=4Ot6R6O0Kk0",
    },
    {
      title: "Brian Tyler - Now You See Me",
      urlPoster: "https://i.ytimg.com/vi/5s9X2g1J7mA/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=5s9X2g1J7mA",
    },
    {
      title: "The Chemical Brothers - Block Rockin’ Beats",
      urlPoster: "https://i.ytimg.com/vi/LOcbhW2B6jo/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=LOcbhW2B6jo",
    },
    {
      title: "Zapp & Roger - Computer Love",
      urlPoster: "https://i.ytimg.com/vi/a1Z7aX-hnmE/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=a1Z7aX-hnmE",
    },
  ],
  "The Truman Show": [
    {
      title: "The Truman Show - Official Trailer",
      urlPoster:
        "https://m.media-amazon.com/images/M/MV5BMjM2NzMzNjM2Nl5BMl5BanBnXkFtZTgwMzUyNjM5MDE@._V1_FMjpg_UX1000_.jpg",
      urlMedia: "https://www.youtube.com/watch?v=dlnmQbPGuls",
    },
    {
      title: "Philip Glass - Truman Sleeps",
      urlPoster: "https://i.ytimg.com/vi/4uXJ_0rWn1M/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=4uXJ_0rWn1M",
    },
    {
      title: "Burkhard Dall - Father Kolbe’s Preaching",
      urlPoster: "https://i.ytimg.com/vi/1g7z3jD0Z0k/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=1g7z3jD0Z0k",
    },
    {
      title: "Philip Glass - Raising the Sail",
      urlPoster: "https://i.ytimg.com/vi/6BAt1zY3Nds/hqdefault.jpg",
      urlMedia: "https://www.youtube.com/watch?v=6BAt1zY3Nds",
    },
  ],
};

const heroMovies = [
  movies[34],
  movies[0],
  movies[1],
  movies[2],
  movies[3],
  movies[16],
];

const recentMovies = [
  movies[0],
  movies[1],
  movies[2],
  movies[3],
  movies[4],
  movies[5],
];

const nextsMovies = [
  movies[6],
  movies[7],
  movies[8],
  movies[31],
  movies[9],
  movies[11],
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

export {
  movies,
  reviewsMovie,
  actorsMovie,
  mediaMovie,
  heroMovies,
  recentMovies,
  nextsMovies,
  genres,
};
