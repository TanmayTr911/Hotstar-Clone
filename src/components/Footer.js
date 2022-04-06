import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

let Footer = () => {
  return (
    <Foot>
      <Link to="/aboutUS">AboutUS</Link>
      <Link to="/Help">Help&FeedBack</Link>v
    </Foot>
  );
};

let Foot = styled.div`
  background-color: black;

  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  margin-top: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  align-item: center;
  justify-content: flex-end;

  a {
    color: white;
    text-decoration: none;
    margin: 10px;

    &:hover {
      font-size: 1.05em;
      font-weight: bold;
    }
  }
`;

export default Footer;
