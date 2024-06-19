// import { Header, Paragraph } from "@components/Typography";
// import { Wrapper } from "@components/Wrapper";
import Container from "@components/Container";

import styled from "styled-components";
const Introduction = styled.div`
  min-height: 100dvh;
  max-width: 60%;
  margin: 0 auto;
  padding: 12rem 0;
  .primary {
    color: ${(props) => props.theme.primary};
    font-family: "Pridi", serif;
    font-weight: 400;
    font-style: normal;
  }
  h1 {
    font-size: 2.8em;
    line-height: 2em;
    color: ${(props) => props.theme.header};
  }
  button {
    padding: 8px 16px;
    border: 1px solid ${(props) => props.theme.primary};
    background-color: transparent;
    border-radius: 5px;
    font-family: "Pridi", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1em;
    color: ${(props) => props.theme.primary};
    margin-top: 2em;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.surface};
    }
  }
`;

const Intro = () => {
  return (
    <Container id="intro">
      <Introduction>
        <p className="primary">Hello, my name is</p>
        <h1>Abdullah Aziz Wali</h1>
        <p>
          Passionate Junior Full Stack Developer with a knack for creating
          seamless and dynamic web applications from front-end design to
          back-end functionality.
        </p>
        <p>I enjoy learning new skills and implementing them in real life!</p>
        <button>Resume</button>
      </Introduction>
    </Container>
  );
};

export default Intro;
