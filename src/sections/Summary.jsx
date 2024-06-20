import Container from "@components/Container";
import Illustration from "@components/Illustration";
// import { Wrapper } from "@components/Wrapper";

import Dev from "../assets/pics.jpg";
import { Header } from "@components/Typography";

import styled from "styled-components";

import ScrollAnimation from "react-animate-on-scroll";

const Wrapper = styled.div`
  position: relative;
  height: 360px;
`;

const Image = styled.img`
  filter: grayscale(1);
  width: 360px;
  height: 360px;
  border-radius: 1em;
  transition: transform 0.5s ease;
  &:hover {
    filter: grayscale(0);
    transform: scale(1.05);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 2em;
`;
const Div = styled.div`
  padding: 0 6rem;
`;

const Summary = () => {
  return (
    <Container id="summary">
      <ScrollAnimation animateIn="fadeIn">
        <Header primary>Summary</Header>
      </ScrollAnimation>
      <Grid>
        <Div>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <p>
              Skilled and versatile Full Stack Developer with 3 years of
              experience in designing, developing, and maintaining web
              applications. Proficient in front-end and back-end technologies,
              including JavaScript, React, Node.js, and databases such as
              MongoDB and MySQL. Strong problem-solving abilities and a track
              record of delivering high-quality, scalable solutions. Excellent
              communication and teamwork skills, with a passion for continuous
              learning and adapting to new technologies.
            </p>
          </ScrollAnimation>
        </Div>
        <Illustration>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <Wrapper>
              <Image src={Dev} alt="dev" />
              {/* <Border /> */}
            </Wrapper>
          </ScrollAnimation>
        </Illustration>
      </Grid>
    </Container>
  );
};

export default Summary;
