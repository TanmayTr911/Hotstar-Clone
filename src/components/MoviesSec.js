import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

let MovieSec = () => {
  let ser = useRef("");
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    getmov(APIURL);
  }, []);

  let getmov = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  return (
    <Cont>
      <Contain>
        {movies.map((movie) => (
          <div>
            <img src={IMGPATH + movie.poster_path} />
            <p>{movie.title}</p>
          </div>
        ))}
      </Contain>
    </Cont>
  );
};

let Cont = styled.div`
  background-color: #040714;
`;

let Contain = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-gap: 12px;
  grid-row-gap: 25px;

  div {
    box-sizing: border-box;
    background-color: rgb(50, 59, 96);
    border-radius: 5px;
    margin: 5px;

    &:hover {
      border: 1px solid white;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  img {
    width: 90%;

    border-radius: 5px;
    margin: 8px;

    &:hover {
      tranform: scale(0.9);
    }
  }

  p {
    color: white;
  }
`;

export default MovieSec;
