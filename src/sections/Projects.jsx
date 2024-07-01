import Container from "@components/Container";
import Illustration from "@components/Illustration";
import { Wrapper } from "@components/Wrapper";
import Dev from "../assets/dev-3.png";
import { Header } from "@components/Typography";

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Header>Projects</Header>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          saepe cupiditate quidem aliquam perspiciatis asperiores laudantium
          earum delectus officiis beatae. Fugiat expedita distinctio consectetur
          beatae earum fugit explicabo dolores nam!
        </p>
      </Wrapper>
      <Illustration>
        <img src={Dev} alt="dev" />
      </Illustration>
    </Container>
  );
};

export default Projects;
