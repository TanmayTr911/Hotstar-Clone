import styled from "styled-components";

let Movies = () => {
  return (
    <div>
      <H>Recommended Movies</H>
      <Container>
        <Wrap>
          <a href="https://www.youtube.com/watch?v=TcMBFSGVi1c" target="_blank">
            <div className="txt">
              <p>Avenger Endgame</p>
              <p className="p2">
                Avengers: Endgame is a 2019 American superhero film based on the
                Marvel Comics superhero team the Avengers. Produced by Marvel
                Studios and distributed by Walt Disney Studios Motion Pictures,
                it is the direct sequel to Avengers: Infinity War (2018) and the
                22nd film in the Marvel Cinematic Universe (MCU).
              </p>
            </div>
            <img src="/images/movie-avenger.jpg" />
          </a>
        </Wrap>
        <Wrap>
          <a href="https://youtu.be/8YjFbMbfXaQ" target="_blank">
            <div className="txt">
              <p>Shang-Chi</p>
              <p className="p2">
                Shang-Chi and the Legend of the Ten Rings is a 2021 American
                superhero film based on Marvel Comics featuring the character
                Shang-Chi. Produced by Marvel Studios and distributed by Walt
                Disney Studios Motion Pictures, it is the 25th film in the
                Marvel Cinematic Universe (MCU).
              </p>
            </div>
            <img src="/images/movie-shang.jpg" />
          </a>
        </Wrap>
        <Wrap>
          <a href="https://www.youtube.com/watch?v=T3T-evQZiQo" target="_blank">
            <div className="txt">
              <p>Agents of S.H.I.E.L.D</p>
              <p className="p2">
                Marvel's Agents of S.H.I.E.L.D. is an American television series
                created by Joss Whedon, Jed Whedon, and Maurissa Tancharoen for
                ABC, based on the Marvel Comics organization S.H.I.E.L.D.
                (Strategic Homeland Intervention, Enforcement, and Logistics
                Division), a peacekeeping and spy agency in a world of
                superheroes.
              </p>
            </div>
            <img src="/images/movie-sheild.jpg" />
          </a>
        </Wrap>
        <Wrap>
          <a href="https://www.youtube.com/watch?v=7O_96yftBRc" target="_blank">
            <div className="txt">
              <p>A Thursday</p>
              <p className="p2">
                When a playschool teacher - Yami Gautam kidnaps 16 small
                students and she puts a series of demands, it not only shakes
                the Mumbai police and city, but it sends repercussions
                throughout the country and its politicians.
              </p>
            </div>
            <img src="/images/movie-thurs.jpg" />
          </a>
        </Wrap>
        <Wrap>
          <a href="https://www.youtube.com/watch?v=QHdkC6Kn0Io" target="_blank">
            <div className="txt">
              <p>83</p>
              <p className="p2">
                83 is a 2021 Indian Hindi-language sports drama film written and
                directed by Kabir Khan and produced by Deepika Padukone, Kabir
                Khan, Vishnu Vardhan Induri, Sajid Nadiadwala, Reliance
                Entertainment.[6][7] Based on the India national cricket team
                led by Kapil Dev, which won the 1983 Cricket World Cup,
              </p>
            </div>
            <img src="/images/movie-83.jpg" />
          </a>
        </Wrap>
        <Wrap>
          <a href="https://www.youtube.com/watch?v=tsxemFX0a7k" target="_blank">
            <div className="txt">
              <p>Chhichhore</p>
              <p className="p2">
                Chhichhore (transl. Immature) is a 2019 Indian Hindi-language
                coming-of-age comedy-drama film directed by Nitesh Tiwari,
                written by Tiwari in association with Piyush Gupta and Nikhil
                Mehrotra, and produced by Sajid Nadiadwala under Nadiadwala
                Grandson Entertainment, with Fox Star Studios acquiring the
                distribution rights.
              </p>
            </div>
            <img src="/images/movie-chichore.jpg" />
          </a>
        </Wrap>
        <Wrap>
          <a href="https://www.youtube.com/watch?v=wedJvW-XvHU" target="_blank">
            <div className="txt">
              <p>November Story</p>
              <p className="p2">
                November Story is an Indian Tamil-language crime thriller web
                series for Hotstar Specials, directed by Indhra Subramanian.
                Produced by Vikatan Televistas the series stars Tamannaah in the
                lead role along with Pasupathy M., G. M. Kumar and Namita
                Krishnamurthy.
              </p>
            </div>
            <img src="/images/movie-nov.jpg" />
          </a>
        </Wrap>
        <Wrap>
          <a
            href="https://www.youtube.com/watch?v=FyuODiTjoFs&t=20s"
            target="_blank"
          >
            <div className="txt">
              <p>Rudra: The Edge of Darkness</p>
              <p className="p2">
                Rudra: The Edge of Darkness is an Indian psychological crime
                thriller streaming television series, created for Disney+
                Hotstar. It's a remake of British series Luther.[1] The series
                stars Ajay Devgn, Raashi Khanna and Esha Deol.
              </p>
            </div>

            <img src="/images/movie-rud.jpg" />
          </a>
        </Wrap>
      </Container>
    </div>
  );
};

let Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 12px;
  grid-row-gap: 25px;
`;

let Wrap = styled.div`
  border: 2px solid gray;
  border-radius: 5px;
  margin: 0px 3px;
  box-shadow: 0px;
  position: relative;

  a {
    color: white;
    font-size: 1.125em;

    .p2 {
      font-size: 0.6em;
      margin-right: 10px;
    }
  }

  .txt {
    opacity: 0;
    position: absolute;
    top: 0px;
    left: 20px;
  }

  img {
    width: 100%;
    hieght: 100%;

    &:hover {
      tranform: scale(1.05);
    }
  }

  &:hover {
    border-color: white;

    img {
      opacity: 0.2;
    }

    .txt {
      opacity: 1;
    }
  }
`;

let H = styled.h2`
  color: white;
  display: block;
  font-family: "Roboto", sans-serif;
  margin-left: 1%;
`;

export default Movies;
