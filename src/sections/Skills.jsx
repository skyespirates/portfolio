import Container from "@components/Container";
import Techstack from "@components/Techstack";
import { Header } from "@components/Typography";
import styled from "styled-components";
import { frontend, backend, databases, others } from "@utils/tech";

const SkillContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  justify-items: center;
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  background-color: ${(props) => props.theme.surface};
  padding: 1em;
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
