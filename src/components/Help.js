import styled from "styled-components";
import { useRef } from "react";

let Help = () => {
  let issue = useRef("");

  async function submitHandler(event) {
    event.preventDefault();

    const res = await fetch(
      "https://hotstar-help-default-rtdb.firebaseio.com/issues.json",
      {
        method: "POST",
        body: JSON.stringify(issue.current.value),
      }
    );

    const data = await res.json();

    issue.current.value = "";
  }

  return (
    <Cont>
      <span>
        <p>Specify your isuues below</p>
        <form onSubmit={submitHandler}>
          <textarea cols={35} rows={5} ref={issue} className="t1"></textarea>

          <p className="p2">
            * our team will contact with you within next 24 hours{" "}
          </p>

          <p>
            <button>Submit</button>
          </p>
        </form>
      </span>

      <img src="./images/help.jpg.png"></img>
    </Cont>
  );
};

let Cont = styled.div`
  background-color: #040714;
  color: white;
  display: flex;
  overflow-x: hidden;

  img {
    position: absolute;
    top: 15vh;
    left: 45vw;
    margin: 0px;
  }

  span {
    position: absolute;
    top: 15vh;
    left: 2vw;
    font-size: 2em;
  }

  form {
    .p2 {
      margin: 0px;
      font-size: 0.4em;
      text-align: left;
    }
    .t1 {
      font-size: 1em;
      baackground-color: yellow;
      margin: 0px;
    }
    p {
      text-align: center;
      margin: 0px;

      button {
        cursor: pointer;
        background-color: white;
        border: 0.7px solid black;
        color: black;
        padding: 5px;
        margin: 0px;
        border-radius: 20px;
        font-size: 0.8em;

        &:hover {
          background-color: black;
          border: 0.5px solid white;

          color: white;
        }
      }
    }
  }
`;

export default Help;
