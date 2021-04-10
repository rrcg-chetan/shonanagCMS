import React, { useState } from "react";
import classnames from 'classnames';
import axios from 'axios';


const Data = () => {
  const [showDropdown, setShowDropdown] = useState();
  const showTableDropdown = () => {
    setShowDropdown(!showDropdown)
  }
  const [accountStatus, setAccountStatus] = useState('')
    
    const accounts = () => {
        axios.get("http://localhost:4000/accounts").then(function (response) {
          //console.log(JSON.stringify(response.data));
          //console.log(response.data.result);
          if(response.data.result){
            setAccountStatus(JSON.stringify(response.data.result));            
          }else{
            setAccountStatus(response.data[0]);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
}
export const columns = [
  /*{
    name: "Image",
    selector: "posterUrl",
    cell: d=> <img src={d.posterUrl} width="30" />,
    sortable: false
  },*/
  {
    name: "ID",
    selector: "id",
    sortable: true
  },
  {
    name: "Title",
    selector: "title",
    sortable: true
  },
  {
    name: "Director",
    selector: "director",
    sortable: true
  },
  {
    name: "Genres",
    selector: "genres",
    sortable: true,
    cell: d => <span>{d.genres.join(", ")}</span>
  },
  {
    name: "Year",
    selector: "year",
    sortable: true
  },
  {
    name: "Options",
    selector: "id",
    sortable: false,
    cell: d => <div><a href={'edit/'+d.id}><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="invoice-row-4996-send-icon" className="cursor-pointer feather feather-send"><line data-v-9a6e255c="" x1="22" y1="2" x2="11" y2="13"></line><polygon data-v-9a6e255c="" points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a><a href={'view/'+d.id}><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="invoice-row-4996-preview-icon" className="mx-1 feather feather-eye"><path data-v-9a6e255c="" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle data-v-9a6e255c="" cx="12" cy="12" r="3"></circle></svg></a><div data-v-9a6e255c="" className={classnames("dropdown b-dropdown btn-group")}><button aria-haspopup="true" aria-expanded="true" type="button" className="btn dropdown-toggle btn-link p-0 dropdown-toggle-no-caret" id="__BVID__2060__BV_toggle_"><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="align-middle text-body feather feather-more-vertical"><circle data-v-9a6e255c="" cx="12" cy="12" r="1"></circle><circle data-v-9a6e255c="" cx="12" cy="5" r="1"></circle><circle data-v-9a6e255c="" cx="12" cy="19" r="1"></circle></svg></button>
    <ul role="menu" tabIndex="-1" className="dropdown-menu show" aria-labelledby="__BVID__2060__BV_toggle_" x-placement="bottom-start"><li data-v-9a6e255c="" role="presentation"><a role="menuitem" href="#" target="_self" className="dropdown-item"><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download"><path data-v-9a6e255c="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline data-v-9a6e255c="" points="7 10 12 15 17 10"></polyline><line data-v-9a6e255c="" x1="12" y1="15" x2="12" y2="3"></line></svg><span data-v-9a6e255c="" className="align-middle ml-50">Download</span></a></li><li data-v-9a6e255c="" role="presentation"><a href="/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/invoice/edit/4996" className="dropdown-item" role="menuitem" target="_self"><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path data-v-9a6e255c="" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path data-v-9a6e255c="" d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg><span data-v-9a6e255c="" className="align-middle ml-50">Edit</span></a></li><li data-v-9a6e255c="" role="presentation"><a role="menuitem" href="#" target="_self" className="dropdown-item"><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash"><polyline data-v-9a6e255c="" points="3 6 5 6 21 6"></polyline><path data-v-9a6e255c="" d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg><span data-v-9a6e255c="" className="align-middle ml-50">Delete</span></a></li><li data-v-9a6e255c="" role="presentation"><a role="menuitem" href="#" target="_self" className="dropdown-item"><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect data-v-9a6e255c="" x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path data-v-9a6e255c="" d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span data-v-9a6e255c="" className="align-middle ml-50">Duplicate</span></a></li></ul></div>
    </div>
  }
];

export const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    runtime: "92",
    genres: ["Comedy", "Fantasy"],
    director: "Tim Burton",
    actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
    plot:
      'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
  },
  {
    id: 2,
    title: "The Cotton Club",
    year: "1984",
    runtime: "127",
    genres: ["Crime", "Drama", "Music"],
    director: "Francis Ford Coppola",
    actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
    plot:
      "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    year: "1994",
    runtime: "142",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    plot:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
  },
  {
    id: 4,
    title: "Crocodile Dundee",
    year: "1986",
    runtime: "97",
    genres: ["Adventure", "Comedy"],
    director: "Peter Faiman",
    actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
    plot:
      "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
  },
  {
    id: 5,
    title: "Valkyrie",
    year: "2008",
    runtime: "121",
    genres: ["Drama", "History", "Thriller"],
    director: "Bryan Singer",
    actors: "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
    plot:
      "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg"
  },
  {
    id: 6,
    title: "Ratatouille",
    year: "2007",
    runtime: "111",
    genres: ["Animation", "Comedy", "Family"],
    director: "Brad Bird, Jan Pinkava",
    actors: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
    plot:
      "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
  },
  {
    id: 7,
    title: "City of God",
    year: "2002",
    runtime: "130",
    genres: ["Crime", "Drama"],
    director: "Fernando Meirelles, Kátia Lund",
    actors:
      "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
    plot:
      "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
  },
  {
    id: 8,
    title: "Memento",
    year: "2000",
    runtime: "113",
    genres: ["Mystery", "Thriller"],
    director: "Christopher Nolan",
    actors: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
    plot:
      "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    id: 9,
    title: "The Intouchables",
    year: "2011",
    runtime: "112",
    genres: ["Biography", "Comedy", "Drama"],
    director: "Olivier Nakache, Eric Toledano",
    actors: "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
    plot:
      "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg"
  },
  {
    id: 10,
    title: "Stardust",
    year: "2007",
    runtime: "127",
    genres: ["Adventure", "Family", "Fantasy"],
    director: "Matthew Vaughn",
    actors: "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
    plot:
      "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
  },
  {
    id: 11,
    title: "Apocalypto",
    year: "2006",
    runtime: "139",
    genres: ["Action", "Adventure", "Drama"],
    director: "Mel Gibson",
    actors:
      "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
    plot:
      "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
  },
  {
    id: 12,
    title: "Taxi Driver",
    year: "1976",
    runtime: "113",
    genres: ["Crime", "Drama"],
    director: "Martin Scorsese",
    actors: "Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito",
    plot:
      "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    id: 13,
    title: "No Country for Old Men",
    year: "2007",
    runtime: "122",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Ethan Coen, Joel Coen",
    actors: "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
    plot:
      "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
  },
  {
    id: 14,
    title: "Planet 51",
    year: "2009",
    runtime: "91",
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Jorge Blanco, Javier Abad, Marcos Martínez",
    actors: "Jessica Biel, John Cleese, Gary Oldman, Dwayne Johnson",
    plot:
      "An alien civilization is invaded by Astronaut Chuck Baker, who believes that the planet was uninhabited. Wanted by the military, Baker must get back to his ship before it goes into orbit without him.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTUyOTAyNTA5Ml5BMl5BanBnXkFtZTcwODU2OTM0Mg@@._V1_SX300.jpg"
  },
  {
    id: 15,
    title: "Looper",
    year: "2012",
    runtime: "119",
    genres: ["Action", "Crime", "Drama"],
    director: "Rian Johnson",
    actors: "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
    plot:
      "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTY3NTY0MjEwNV5BMl5BanBnXkFtZTcwNTE3NDA1OA@@._V1_SX300.jpg"
  },
  {
    id: 16,
    title: "Corpse Bride",
    year: "2005",
    runtime: "77",
    genres: ["Animation", "Drama", "Family"],
    director: "Tim Burton, Mike Johnson",
    actors: "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
    plot:
      "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg"
  },
  {
    id: 17,
    title: "The Third Man",
    year: "1949",
    runtime: "93",
    genres: ["Film-Noir", "Mystery", "Thriller"],
    director: "Carol Reed",
    actors: "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
    plot:
      "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg"
  },
  {
    id: 18,
    title: "The Beach",
    year: "2000",
    runtime: "119",
    genres: ["Adventure", "Drama", "Romance"],
    director: "Danny Boyle",
    actors:
      "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
    plot:
      "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    id: 19,
    title: "Scarface",
    year: "1983",
    runtime: "170",
    genres: ["Crime", "Drama"],
    director: "Brian De Palma",
    actors:
      "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
    plot:
      "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg"
  },
  {
    id: 20,
    title: "Sid and Nancy",
    year: "1986",
    runtime: "112",
    genres: ["Biography", "Drama", "Music"],
    director: "Alex Cox",
    actors: "Gary Oldman, Chloe Webb, David Hayman, Debby Bishop",
    plot:
      "Morbid biographical story of Sid Vicious, bassist with British punk group the Sex Pistols, and his girlfriend Nancy Spungen. When the Sex Pistols break up after their fateful US tour, ...",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjA5NzY4M15BMl5BanBnXkFtZTcwNjQ2NzI5NA@@._V1_SX300.jpg"
  },
  {
    id: 21,
    title: "Black Swan",
    year: "2010",
    runtime: "108",
    genres: ["Drama", "Thriller"],
    director: "Darren Aronofsky",
    actors: "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey",
    plot:
      'A committed dancer wins the lead role in a production of Tchaikovsky\'s "Swan Lake" only to find herself struggling to maintain her sanity.',
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
  },
  {
    id: 22,
    title: "Inception",
    year: "2010",
    runtime: "148",
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "Christopher Nolan",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    plot:
      "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  },
  {
    id: 23,
    title: "The Deer Hunter",
    year: "1978",
    runtime: "183",
    genres: ["Drama", "War"],
    director: "Michael Cimino",
    actors: "Robert De Niro, John Cazale, John Savage, Christopher Walken",
    plot:
      "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzYmRmZTQtYjk2NS00MDdlLTkxMDAtMTE2YTM2ZmNlMTBkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    id: 24,
    title: "Chasing Amy",
    year: "1997",
    runtime: "113",
    genres: ["Comedy", "Drama", "Romance"],
    director: "Kevin Smith",
    actors: "Ethan Suplee, Ben Affleck, Scott Mosier, Jason Lee",
    plot:
      "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    id: 25,
    title: "Django Unchained",
    year: "2012",
    runtime: "165",
    genres: ["Drama", "Western"],
    director: "Quentin Tarantino",
    actors: "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
    plot:
      "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg"
  },
  {
    id: 26,
    title: "The Silence of the Lambs",
    year: "1991",
    runtime: "118",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Jonathan Demme",
    actors:
      "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
    plot:
      "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg"
  },
  {
    id: 27,
    title: "American Beauty",
    year: "1999",
    runtime: "122",
    genres: ["Drama", "Romance"],
    director: "Sam Mendes",
    actors: "Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
    plot:
      "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4NTI5NzYyNV5BMl5BanBnXkFtZTgwNTkxNTYxMTE@._V1_SX300.jpg"
  },
  {
    id: 28,
    title: "Snatch",
    year: "2000",
    runtime: "102",
    genres: ["Comedy", "Crime"],
    director: "Guy Ritchie",
    actors: "Benicio Del Toro, Dennis Farina, Vinnie Jones, Brad Pitt",
    plot:
      "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    id: 29,
    title: "Midnight Express",
    year: "1978",
    runtime: "121",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Alan Parker",
    actors: "Brad Davis, Irene Miracle, Bo Hopkins, Paolo Bonacelli",
    plot:
      "Billy Hayes, an American college student, is caught smuggling drugs out of Turkey and thrown into prison.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg"
  },
  {
    id: 30,
    title: "Pulp Fiction",
    year: "1994",
    runtime: "154",
    genres: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    actors: "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
    plot:
      "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg"
  },
  {
    id: 31,
    title: "Lock, Stock and Two Smoking Barrels",
    year: "1998",
    runtime: "107",
    genres: ["Comedy", "Crime"],
    director: "Guy Ritchie",
    actors: "Jason Flemyng, Dexter Fletcher, Nick Moran, Jason Statham",
    plot:
      "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    id: 32,
    title: "Lucky Number Slevin",
    year: "2006",
    runtime: "110",
    genres: ["Crime", "Drama", "Mystery"],
    director: "Paul McGuigan",
    actors: "Josh Hartnett, Bruce Willis, Lucy Liu, Morgan Freeman",
    plot:
      "A case of mistaken identity lands Slevin into the middle of a war being plotted by two of the city's most rival crime bosses: The Rabbi and The Boss. Slevin is under constant surveillance by relentless Detective Brikowski as well as the infamous assassin Goodkat and finds himself having to hatch his own ingenious plot to get them before they get him.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzc1OTEwMTk4OF5BMl5BanBnXkFtZTcwMTEzMDQzMQ@@._V1_SX300.jpg"
  },
  {
    id: 33,
    title: "Rear Window",
    year: "1954",
    runtime: "112",
    genres: ["Mystery", "Thriller"],
    director: "Alfred Hitchcock",
    actors: "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
    plot:
      "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    id: 34,
    title: "Pan's Labyrinth",
    year: "2006",
    runtime: "118",
    genres: ["Drama", "Fantasy", "War"],
    director: "Guillermo del Toro",
    actors: "Ivana Baquero, Sergi López, Maribel Verdú, Doug Jones",
    plot:
      "In the falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    posterUrl: ""
  },
  {
    id: 35,
    title: "Shutter Island",
    year: "2010",
    runtime: "138",
    genres: ["Mystery", "Thriller"],
    director: "Martin Scorsese",
    actors: "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley, Max von Sydow",
    plot:
      "In 1954, a U.S. marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg"
  },
  {
    id: 36,
    title: "Reservoir Dogs",
    year: "1992",
    runtime: "99",
    genres: ["Crime", "Drama", "Thriller"],
    director: "Quentin Tarantino",
    actors: "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn",
    plot:
      "After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
  },
  {
    id: 37,
    title: "The Shining",
    year: "1980",
    runtime: "146",
    genres: ["Drama", "Horror"],
    director: "Stanley Kubrick",
    actors: "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
    plot:
      "A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@._V1_SX300.jpg"
  },
  {
    id: 38,
    title: "Midnight in Paris",
    year: "2011",
    runtime: "94",
    genres: ["Comedy", "Fantasy", "Romance"],
    director: "Woody Allen",
    actors: "Owen Wilson, Rachel McAdams, Kurt Fuller, Mimi Kennedy",
    plot:
      "While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s everyday at midnight.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_SX300.jpg"
  },
  {
    id: 39,
    title: "Les Misérables",
    year: "2012",
    runtime: "158",
    genres: ["Drama", "Musical", "Romance"],
    director: "Tom Hooper",
    actors: "Hugh Jackman, Russell Crowe, Anne Hathaway, Amanda Seyfried",
    plot:
      "In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter. The decision changes their lives forever.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_SX300.jpg"
  },
  {
    id: 40,
    title: "L.A. Confidential",
    year: "1997",
    runtime: "138",
    genres: ["Crime", "Drama", "Mystery"],
    director: "Curtis Hanson",
    actors: "Kevin Spacey, Russell Crowe, Guy Pearce, James Cromwell",
    plot:
      "As corruption grows in 1950s LA, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNWEwNDhhNWUtYWMzNi00ZTNhLWFiZDAtMjBjZmJhMTU0ZTY2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    id: 41,
    title: "Moneyball",
    year: "2011",
    runtime: "133",
    genres: ["Biography", "Drama", "Sport"],
    director: "Bennett Miller",
    actors: "Brad Pitt, Jonah Hill, Philip Seymour Hoffman, Robin Wright",
    plot:
      "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg"
  },
  {
    id: 42,
    title: "The Hangover",
    year: "2009",
    runtime: "100",
    genres: ["Comedy"],
    director: "Todd Phillips",
    actors: "Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha",
    plot:
      "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_SX300.jpg"
  },
  {
    id: 43,
    title: "The Great Beauty",
    year: "2013",
    runtime: "141",
    genres: ["Drama"],
    director: "Paolo Sorrentino",
    actors: "Toni Servillo, Carlo Verdone, Sabrina Ferilli, Carlo Buccirosso",
    plot:
      "Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_SX300.jpg"
  },
  {
    id: 44,
    title: "Gran Torino",
    year: "2008",
    runtime: "116",
    genres: ["Drama"],
    director: "Clint Eastwood",
    actors: "Clint Eastwood, Christopher Carley, Bee Vang, Ahney Her",
    plot:
      "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTQyMTczMTAxMl5BMl5BanBnXkFtZTcwOTc1ODE0Mg@@._V1_SX300.jpg"
  },
  {
    id: 45,
    title: "Mary and Max",
    year: "2009",
    runtime: "92",
    genres: ["Animation", "Comedy", "Drama"],
    director: "Adam Elliot",
    actors: "Toni Collette, Philip Seymour Hoffman, Barry Humphries, Eric Bana",
    plot:
      "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NDIyNTA1Nl5BMl5BanBnXkFtZTcwMjc2Njk3OA@@._V1_SX300.jpg"
  },
  {
    id: 46,
    title: "Flight",
    year: "2012",
    runtime: "138",
    genres: ["Drama", "Thriller"],
    director: "Robert Zemeckis",
    actors:
      "Nadine Velazquez, Denzel Washington, Carter Cabassa, Adam C. Edwards",
    plot:
      "An airline pilot saves almost all his passengers on his malfunctioning airliner which eventually crashed, but an investigation into the accident reveals something troubling.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA@@._V1_SX300.jpg"
  },
  {
    id: 47,
    title: "One Flew Over the Cuckoo's Nest",
    year: "1975",
    runtime: "133",
    genres: ["Drama"],
    director: "Milos Forman",
    actors: "Michael Berryman, Peter Brocco, Dean R. Brooks, Alonzo Brown",
    plot:
      "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJkODkwOTItZThjZC00MTE0LWIxNzQtYTM3MmQwMGI1OWFiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
  },
  {
    id: 48,
    title: "Requiem for a Dream",
    year: "2000",
    runtime: "102",
    genres: ["Drama"],
    director: "Darren Aronofsky",
    actors: "Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans",
    plot:
      "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg"
  },
  {
    id: 49,
    title: "The Truman Show",
    year: "1998",
    runtime: "103",
    genres: ["Comedy", "Drama", "Sci-Fi"],
    director: "Peter Weir",
    actors: "Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
    plot:
      "An insurance salesman/adjuster discovers his entire life is actually a television show.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    id: 50,
    title: "The Artist",
    year: "2011",
    runtime: "100",
    genres: ["Comedy", "Drama", "Romance"],
    director: "Michel Hazanavicius",
    actors: "Jean Dujardin, Bérénice Bejo, John Goodman, James Cromwell",
    plot:
      "A silent movie star meets a young dancer, but the arrival of talking pictures sends their careers in opposite directions.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzk0NzQxMTM0OV5BMl5BanBnXkFtZTcwMzU4MDYyNQ@@._V1_SX300.jpg"
  },
  {
    id: 51,
    title: "Forrest Gump",
    year: "1994",
    runtime: "142",
    genres: ["Comedy", "Drama"],
    director: "Robert Zemeckis",
    actors:
      "Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys",
    plot:
      "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
  },
  {
    id: 52,
    title: "The Hobbit: The Desolation of Smaug",
    year: "2013",
    runtime: "161",
    genres: ["Adventure", "Fantasy"],
    director: "Peter Jackson",
    actors: "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
    plot:
      "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg"
  },
  {
    id: 53,
    title: "Vicky Cristina Barcelona",
    year: "2008",
    runtime: "96",
    genres: ["Drama", "Romance"],
    director: "Woody Allen",
    actors:
      "Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina",
    plot:
      "Two girlfriends on a summer holiday in Spain become enamored with the same painter, unaware that his ex-wife, with whom he has a tempestuous relationship, is about to re-enter the picture.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NDQ4MTg2MV5BMl5BanBnXkFtZTcwNDUzNjU3MQ@@._V1_SX300.jpg"
  },
  {
    id: 54,
    title: "Slumdog Millionaire",
    year: "2008",
    runtime: "120",
    genres: ["Drama", "Romance"],
    director: "Danny Boyle, Loveleen Tandan",
    actors: "Dev Patel, Saurabh Shukla, Anil Kapoor, Rajendranath Zutshi",
    plot:
      'A Mumbai teen reflects on his upbringing in the slums when he is accused of cheating on the Indian Version of "Who Wants to be a Millionaire?"',
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTU2NTA5NzI0N15BMl5BanBnXkFtZTcwMjUxMjYxMg@@._V1_SX300.jpg"
  },
  {
    id: 55,
    title: "Lost in Translation",
    year: "2003",
    runtime: "101",
    genres: ["Drama"],
    director: "Sofia Coppola",
    actors:
      "Scarlett Johansson, Bill Murray, Akiko Takeshita, Kazuyoshi Minamimagoe",
    plot:
      "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_SX300.jpg"
  },
  {
    id: 56,
    title: "Match Point",
    year: "2005",
    runtime: "119",
    genres: ["Drama", "Romance", "Thriller"],
    director: "Woody Allen",
    actors:
      "Jonathan Rhys Meyers, Alexander Armstrong, Paul Kaye, Matthew Goode",
    plot:
      "At a turning point in his life, a former tennis pro falls for an actress who happens to be dating his friend and soon-to-be brother-in-law.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzNzY4MzE5NF5BMl5BanBnXkFtZTcwMzQ1MDMzMQ@@._V1_SX300.jpg"
  },
  {
    id: 57,
    title: "Psycho",
    year: "1960",
    runtime: "109",
    genres: ["Horror", "Mystery", "Thriller"],
    director: "Alfred Hitchcock",
    actors: "Anthony Perkins, Vera Miles, John Gavin, Janet Leigh",
    plot:
      "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMDI3OWRmOTEtOWJhYi00N2JkLTgwNGItMjdkN2U0NjFiZTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    id: 58,
    title: "North by Northwest",
    year: "1959",
    runtime: "136",
    genres: ["Action", "Adventure", "Crime"],
    director: "Alfred Hitchcock",
    actors: "Cary Grant, Eva Marie Saint, James Mason, Jessie Royce Landis",
    plot:
      "A hapless New York advertising executive is mistaken for a government agent by a group of foreign spies, and is pursued across the country while he looks for a way to survive.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMjQwMTQ0MzgwNl5BMl5BanBnXkFtZTgwNjc4ODE4MzE@._V1_SX300.jpg"
  },
  {
    id: 59,
    title: "Madagascar: Escape 2 Africa",
    year: "2008",
    runtime: "89",
    genres: ["Animation", "Action", "Adventure"],
    director: "Eric Darnell, Tom McGrath",
    actors: "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
    plot:
      "The animals try to fly back to New York City, but crash-land on an African wildlife refuge, where Alex is reunited with his parents.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMDA4NDcwMl5BMl5BanBnXkFtZTcwODAxNTQ3MQ@@._V1_SX300.jpg"
  }
];
export default Data;