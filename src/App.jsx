import Navigation from "@components/Navigation";
import Experience from "@sections/Experience";
import Intro from "@sections/Intro";
// import Projects from "@sections/Projects";
import Skills from "@sections/Skills";
import Summary from "@sections/Summary";

import styled from "styled-components";
import GlobalStyle from "./utils/global";

import option from "@utils/particles.json";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Container = styled.div`
  position: relative;
`;

const MainWrapper = styled.div`
  max-width: 70%;
  margin: 0 auto;
  padding: 2em 0;
`;

const App = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <GlobalStyle />
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={option}
        />
      )}
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
