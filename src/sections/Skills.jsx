import Container from "@components/Container";
import { Header } from "@components/Typography";
import styled from "styled-components";
import { frontend, backend, databases, others } from "@utils/tech";
import { Fragment } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ScrollAnimation from "react-animate-on-scroll";

const SkillContainer = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  justify-items: center;
`;

const Flex = styled.div`
  border-radius: 1em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  background-color: ${(props) => props.theme.surface};
  padding: 1em;
  height: 100%;
  img {
    width: 80px;
    height: 80px;
    filter: grayscale(1);
    transition: transform 0.3s ease-in-out;
    &:hover {
      filter: grayscale(0);
      transform: scale(1.1);
    }
  }
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Header primary>Skills</Header>
      <SkillContainer>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <Flex>
            {frontend.map((icon, i) => (
              <Fragment key={i}>
                <img
                  src={icon.src}
                  alt={icon.name}
                  data-tooltip-id={icon.src}
                />
                <ReactTooltip
                  id={icon.src}
                  place="bottom"
                  variant="info"
                  content={icon.name}
                  style={{ zIndex: 99 }}
                />
              </Fragment>
            ))}
          </Flex>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <Flex>
            {backend.map((icon, i) => (
              <Fragment key={i}>
                <img
                  src={icon.src}
                  alt={icon.name}
                  data-tooltip-id={icon.src}
                />
                <ReactTooltip
                  id={icon.src}
                  place="bottom"
                  variant="info"
                  content={icon.name}
                  style={{ zIndex: 99 }}
                />
              </Fragment>
            ))}
          </Flex>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <Flex>
            {databases.map((icon, i) => (
              <Fragment key={i}>
                <img
                  src={icon.src}
                  alt={icon.name}
                  data-tooltip-id={icon.src}
                />
                <ReactTooltip
                  id={icon.src}
                  place="bottom"
                  variant="info"
                  content={icon.name}
                  style={{ zIndex: 99 }}
                />
              </Fragment>
            ))}
          </Flex>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <Flex>
            {others.map((icon, i) => (
              <Fragment key={i}>
                <img
                  src={icon.src}
                  alt={icon.name}
                  data-tooltip-id={icon.src}
                />
                <ReactTooltip
                  id={icon.src}
                  place="bottom"
                  variant="info"
                  content={icon.name}
                  style={{ zIndex: 99 }}
                />
              </Fragment>
            ))}
          </Flex>
        </ScrollAnimation>
      </SkillContainer>
    </Container>
  );
};

export default Skills;
