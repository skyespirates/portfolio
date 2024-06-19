import Navigation from "@components/Navigation";
import Experience from "@sections/Experience";
import Intro from "@sections/Intro";
// import Projects from "@sections/Projects";
import Skills from "@sections/Skills";
import Summary from "@sections/Summary";

import styled from "styled-components";
import GlobalStyle from "./utils/global";

const Container = styled.div``;

const MainWrapper = styled.div`
  padding: 2em 8em;
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
