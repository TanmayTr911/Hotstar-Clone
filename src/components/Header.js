import Container from "../styledcomp/container";
import styled from "styled-components";
import Home from "./Home";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

let Header = (props) => {
  let [log, setlog] = useState(true);

  let login = () => {
    setlog(false);
  };

  return (
    <div>
      <Container>
        <Logo src="/images/logo.svg" />

        <Navt>
          <Link to="/">
            <img src="images/home-icon.svg"></img>
            <span>HOME</span>
          </Link>

          <Link to="/Search">
            <img src="/images/search-icon.svg"></img>
            <span>SEARCH</span>
          </Link>

          <a>
            <img src="/images/watchlist-icon.svg"></img>
            <span>WATCHLIST</span>
          </a>

          <Link to="Movies">
            <img src="/images/movie-icon.svg"></img>
            <span>MOVIES</span>
          </Link>

          <a>
            <img src="/images/series-icon.svg"></img>
            <span>SERIES</span>
          </a>
        </Navt>
        {log && <P onClick={login}>LOGIN</P>}
        {!log && <UserImg src="/images/userimg.jpg"></UserImg>}
      </Container>
    </div>
  );
};

const Logo = styled.img`
  width: 70px;
  padding: 0px 10px;
`;

const P = styled.button`
  background-color: black;
  color: white;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 1.5em;

  position: absolute;
  right: 8px;
  top: 10px;

  &:hover {
    border: 1px solid white;
  }
`;

const Navt = styled.div`
  display: inline-flex;

  align-item: center;

  padding-right: 10vw;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color:white;


    img {
      margin-left: 20px;
      height: 25px;
    }

    span {
      font-size: 13px;
      position: relative;
      letter-spacing: 1.35px;

      &:after {
        content: "";
        position: absolute;
        height: 2px;
        background: white;

        left: 0px;
        right: 0px;
        bottom: -6px;
        transform: scaleX(0);
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }

    &:visited {
      color: white;
    }
  }
`;

const UserImg = styled.img`
  height: 50px;
  border-radius: 50%;
  position: absolute;
  right: 4px;
  top: 2px;
  cursor: pointer;

  &:hover {
    border: 2px solid #999;
    top: 0px;
    right: 2px;
    transition: all 0.3s ease-in-out;
  }
`;

export default Header;
