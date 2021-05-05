import "./App.css";
import Nav from "./Component/Navbar/NavBar";
import MovieList from "./Component/Movielist/MovieList";
import React, {useState} from "react";
import {Switch, Route} from "react-router-dom";
import DescTrailer from "./Component/DescTrailer/DescTrailer";
import Err from "./Component/Error/Error";
function App() {
  const [movielist, setMovielist] = useState([
   
    {
      id: Math.random(),
      image:
        'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
      rating: 4,
      name: "Game of thrones",
      date: '2011',
      type: 'fantasy | drame',
      description:
        "Game of Thrones is an HBO series that tells the story of a medieval country's civil war. The series, which premiered in April 2011, is set on the fictional continents of Westeros and Essos in a world where seasons stretch on for years.",
        trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
    },
    {
      id: Math.random(),
      image:
        'https://media.senscritique.com/media/000012288077/150/Pulp_Fiction.jpg',
      rating: 5,
      name: ' Pulp Fiction ',
      date: '1994',
      type: 'Western',
      description:
        'A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.',
        trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
      },
    {
      id: Math.random(),
      image:
        'https://media.senscritique.com/media/000018762465/150/Interstellar.jpg',
      rating: 4,
      name: ' Interstellar ',
      date: '2014',
      type: 'Crime | Drama',
      description:
        'A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.',
        trailer: "https://www.youtube.com/watch?v=Lm8p5rlrSkY&t=34s",
      },
    {
      id: Math.random(),
      image:
        'https://media.senscritique.com/media/000019855182/150/Blade_Runner.jpg',
      rating: 4,
      name: '  Blade Runner ',
      date: '1979',
      type: 'Action | Adventure',
      description:
        'In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.',
        trailer: "https://www.youtube.com/watch?v=gCcx85zbxz4&t=4s",
    },
  ]);
  const [searchRating, setsearchRating] = useState(0);
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});

  const handleMovie = (x) => {
    setMovie(x);
  };
  return (
    <div>
      <Nav
        setsearchRating={setsearchRating}
        setSearch={setSearch}
        handleMovie={handleMovie}
        setMovielist={setMovielist}
        movielist={movielist}
      />

      <Switch>
        <Route path="/Description/:id" component={DescTrailer} />
        <Route
          exact
          path="/"
          render={(props) => (
            <MovieList
              searchRating={searchRating}
              movielist={movielist}
              search={search}
              {...props}
            />
          )}
        />
        <Route path="/*" component={Err} />
      </Switch>
    </div>
  );
}

export default App;
