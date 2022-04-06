import styled from "styled-components";

let Viewers = () => {
  return (
    <Container>
      <Wrap>
        <a href="https://console.firebase.google.com/project/movie-54335/database/movie-54335-default-rtdb/data">
          <img src="/images/viewers-disney.png" />
        </a>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
      </Wrap>
    </Container>
  );
};

let Container = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 7px;
`;

let Wrap = styled.div`
  border: 2px solid gray;
  border-radius: 5px;
  margin: 0px 3px;
  box-shadow: 0px;
  img {
    width: 100%;
    hieght: 100%;

    &:hover {
      transform: scale(1.05);
    }
  }

  &:hover {
    tranform: scaleX(1.2);
    border-color: white;
  }
`;

export default Viewers;
