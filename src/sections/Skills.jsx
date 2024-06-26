import { frontend, backend, databases, others } from "@utils/tech";
import { Fragment } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import ScrollAnimation from "react-animate-on-scroll";
import { Container, Header, SkillContainer, Flex } from "@components";

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
