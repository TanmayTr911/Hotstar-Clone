import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Container from "../styledcomp/container";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let Search = () => {
  let ser = useRef("");
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    getmov();
  }, []);

  let getmov = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  let submitHandler = (e) => {
    e.preventDefault();

    if (ser.current.value) {
      getmov(SEARCHAPI + ser.current.value);

      ser.current.value = "";
    }
  };

  return (
    <Cont>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          cols={30}
          rows={1}
          ref={ser}
          placeholder="search"
          id="myInput"
        />
        <button type="submit" onSubmit={submitHandler} id="myBtn">
          SEARCH
        </button>
      </form>

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

  form {
    height: 20vh;
    display: flex;
    background-color: #17172e;;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
      font-size: 2em;
      width: 40vw;
      margin-top:20px;
    }

    button {
      background-color: #040714;
      border: 1px solid white;

      color: white;
      cursor: pointer;
      border-radius: 5px;
      padding: 5px;
      margin: 10px;
      margin-bottom:0px

      &:hover {
        border: 2px solid white;
        background-color: black;
      }
    }
  }
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

export default Search;
