import Navigation from "@components/Navigation";
import Experience from "@sections/Experience";
import Intro from "@sections/Intro";
// import Projects from "@sections/Projects";
import Skills from "@sections/Skills";
import Summary from "@sections/Summary";

import styled from "styled-components";
import GlobalStyle from "./utils/global";

const Container = styled.div`
  position: relative;
`;

const MainWrapper = styled.div`
  max-width: 70%;
  margin: 0 auto;
  padding: 2em 0;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Navigation />
        <MainWrapper>
          <Intro />
          <Summary />
          <Skills />
          <Experience />
          {/* <Projects /> */}
        </MainWrapper>
      </Container>
    </>
  );
};

export default App;
