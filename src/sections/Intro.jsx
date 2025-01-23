import { Container, Introduction } from '@components';

const Intro = () => {
  return (
    <Container id="intro">
      <Introduction>
        <p className="primary">Hello, my name is</p>
        <h1>Abdullah Aziz Wali</h1>
        <p>
          Passionate Junior Full Stack Developer with a knack for creating
          seamless and dynamic web applications from front-end design to
          back-end functionality.
        </p>
        <p>I enjoy learning new skills and implementing them in real life!</p>
        <p>Right now I&apos;m learning Golang and some DevOps stuff</p>
        <button>Resume</button>
      </Introduction>
    </Container>
  );
};

export default Intro;
