import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: white;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.3s ease;
`;

const Sliding = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
  position: relative;
`;

const ImgContainer = styled.div`
  flex: 1;
  width: 100vw;
  height: 100vh;
`;

const Image = styled.img`
  width: 50%;
  height: 60%;
  position: absolute;
  top: 130px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 5vw;
  letter-spacing: 2px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 40px 0px;
  flex: 1;
  position: relative;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  flex: 1;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
    } else {
      setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
    }
  };

  const autoScroll = () => {
    setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const timer = setTimeout(autoScroll, 5000);
    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <SliderContainer>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Sliding bg="f5fafd">
          <ImgContainer>
            <Image src="https://sb.kaleidousercontent.com/67418/800x533/a5ddfb21a6/persons3-nobg.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>CLOTHES FOR YOUR BABY</Title>
            <Description>MOST HOT! SAVE 70% ON BABY CLOTHES</Description>
            <Button>Click to see more</Button>
          </InfoContainer>
        </Sliding>
        <Sliding bg="f5fafd">
          <ImgContainer>
            <Image src="https://ae01.alicdn.com/kf/Hebd823b05e3844b9b6f0bb269dca3d46C/Baby-Girl-Clothes-Striped-Pattern-Girls-Clothing-Vest-Dress-Clothes-For-Girls-Toddler-Children-s-Suits.png_.webp" />
          </ImgContainer>
          <InfoContainer>
            <Title>GIRLS CLOTHING</Title>
            <Description>MOST HOT! SAVE 60% ON GIRL CLOTHING</Description>
            <Button>Click to see more</Button>
          </InfoContainer>
        </Sliding>
        <Sliding bg="f5fafd">
          <ImgContainer>
            <Image src="https://freepngimg.com/thumb/kids/29033-9-child-transparent-image.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>BOYS!BACK TO SCHOOL SALE</Title>
            <Description>MOST HOT! SAVE 40% ON BOYS CLOTHING</Description>
            <Button>Click to see more</Button>
          </InfoContainer>
        </Sliding>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </SliderContainer>
  );
};

export default Slider;