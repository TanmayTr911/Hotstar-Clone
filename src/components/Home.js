import styled from "styled-components";
import Imgslider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import Footer from "./Footer";

let Home = () => {
  return (
    <Container>
      <Imgslider />
      <Viewers />
      <Movies />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: #040714;
`;

export default Home;
