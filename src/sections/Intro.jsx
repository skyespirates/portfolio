import Container from "@components/Container";
import { Header, Paragraph } from "@components/Typography";
import { Wrapper } from "@components/Wrapper";
import Dev from "../assets/dev-0.png";

import Illustration from "@components/Illustration";

const Intro = () => {
  return (
    <Container id="intro" col="2">
      <Illustration>
        <img src={Dev} alt="desk" />
      </Illustration>
      <Wrapper align="center" gap="1">
        <Header>Abdullah Aziz Wali</Header>
        <Paragraph>Web Developer - Software Engineer</Paragraph>
      </Wrapper>
    </Container>
  );
};

export default Intro;
