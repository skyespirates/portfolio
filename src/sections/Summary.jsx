import Container from "@components/Container";
import Illustration from "@components/Illustration";
import { Wrapper } from "@components/Wrapper";

import Dev from "../assets/pics.jpg";
import { Header } from "@components/Typography";

import styled from "styled-components";

import ScrollAnimation from "react-animate-on-scroll";

const ImageContainer = styled.div`
  width: 360px;
  height: 360px;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  filter: grayscale(1);
`;

const Summary = () => {
  return (
    <Container id="summary">
      <Illustration>
        <ImageContainer>
          <Image src={Dev} alt="dev" />
        </ImageContainer>
      </Illustration>
      <Wrapper>
        <ScrollAnimation animateIn="fadeIn">
          <Header>Summary</Header>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            tenetur adipisci voluptatibus sint ipsam veritatis odit laudantium
            optio qui ea rerum magni aut architecto fugit pariatur, maxime a
            quae itaque.
          </p>
        </ScrollAnimation>
      </Wrapper>
    </Container>
  );
};

export default Summary;
