import Container from "@components/Container";
import Techstack from "@components/Techstack";
import { Header } from "@components/Typography";
import styled from "styled-components";

const SkillContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2em;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Header>Skills</Header>
      <SkillContainer>
        <Techstack>
          <h3>Frontend</h3>
          <ul>
            <li>HTML, CSS, JS</li>
            <li>React</li>
            <li>Next</li>
          </ul>
        </Techstack>
        <Techstack>
          <h3>Backend</h3>
          <ul>
            <li>Node</li>
            <li>Expressjs</li>
            <li>Hapijs</li>
          </ul>
        </Techstack>
        <Techstack>
          <h3>Database</h3>
          <ul>
            <li>Mysql</li>
            <li>Postgresql</li>
            <li>Mongodb</li>
            <li>Redis</li>
          </ul>
        </Techstack>
        <Techstack>
          <h3>Others</h3>
          <ul>
            <li>Git/Github</li>
            <li>RESTAPI</li>
            <li>Docker</li>
          </ul>
        </Techstack>
      </SkillContainer>
    </Container>
  );
};

export default Skills;
