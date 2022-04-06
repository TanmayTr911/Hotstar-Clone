import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Imgslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Sl {...settings}>
      <Wrap>
        <IMG src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <IMG src="/images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <IMG src="/images/slider-scale.jpg" />
      </Wrap>
      <Wrap>
        <IMG src="/images/slider-scales.jpg" />
      </Wrap>
    </Sl>
  );
};

let Sl = styled(Slider)`
  background-color: #040714;
  width: 90%;
  padding-top: 10px;
  margin-left: 5vw;

  li.slick-active button::before {
    color: white;
  }

  ul li button {
    &:before {
      color: white;
    }
  }

  ul li button {
    &:after {
      color: white;
    }
  }
`;

let Wrap = styled.div``;

let IMG = styled.img`
  width: 100%;
  border-radius: 5px;

  &:hover {
    border: 2px solid white;
    width: 98%;
    margin-left: 1%;
  }
`;
export default Imgslider;
