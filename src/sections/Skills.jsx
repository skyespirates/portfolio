import Container from "@components/Container";
import Techstack from "@components/Techstack";
import { Header } from "@components/Typography";
import styled from "styled-components";
import { frontend, backend, databases, others } from "@utils/tech";

const SkillContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2em;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-self: center;
  gap: 1rem;
  border: 1px solid crimson;
  img {
    width: 80px;
    height: 80px;
  }
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Header>Skills</Header>
      <SkillContainer>
        <Flex>
          {frontend.map((icon, i) => (
            <img key={i} src={icon.src} alt={icon.name} />
          ))}
        </Flex>
        <Flex>
          {backend.map((icon, i) => (
            <img key={i} src={icon.src} alt={icon.name} />
          ))}
        </Flex>
        <Flex>
          {databases.map((icon, i) => (
            <img key={i} src={icon.src} alt={icon.name} />
          ))}
        </Flex>
        <Flex>
          {others.map((icon, i) => (
            <img key={i} src={icon.src} alt={icon.name} />
          ))}
        </Flex>
      </SkillContainer>
    </Container>
  );
};

export default Skills;
