import {
  Container,
  Header,
  Illustration,
  Grid,
  Div,
  Wrapper,
  Image,
} from "@components";
import Dev from "../assets/pics.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const Summary = () => {
  return (
    <Container id="summary">
      <ScrollAnimation animateIn="fadeIn">
        <Header primary>Summary</Header>
      </ScrollAnimation>
      <Grid>
        <Div>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <p>
              Skilled and versatile Full Stack Developer with 3 years of
              experience in designing, developing, and maintaining web
              applications. Proficient in front-end and back-end technologies,
              including JavaScript, React, Node.js, and databases such as
              MongoDB and MySQL. Strong problem-solving abilities and a track
              record of delivering high-quality, scalable solutions. Excellent
              communication and teamwork skills, with a passion for continuous
              learning and adapting to new technologies.
            </p>
          </ScrollAnimation>
        </Div>
        <Illustration>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <Wrapper>
              <Image src={Dev} alt="dev" />
              {/* <Border /> */}
            </Wrapper>
          </ScrollAnimation>
        </Illustration>
      </Grid>
    </Container>
  );
};

export default Summary;
