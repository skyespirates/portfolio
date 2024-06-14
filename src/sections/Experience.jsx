import Container from "@components/Container";
import { Header } from "@components/Typography";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BiSolidBriefcase, BiSolidGraduation } from "react-icons/bi";
import ScrollAnimation from "react-animate-on-scroll";

const Experience = () => {
  return (
    <Container id="experience">
      <Header>Experience</Header>
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2024 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BiSolidBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack Developer
            </h3>
            <h7 className="vertical-timeline-element-subtitle">
              Dans Multi Pro
            </h7>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BiSolidBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <h7 className="vertical-timeline-element-subtitle">DMS Software</h7>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BiSolidGraduation />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Computer Science
            </h3>
            <h7 className="vertical-timeline-element-subtitle">
              Institut Pertanian Bogor (IPB University)
            </h7>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </ScrollAnimation>
    </Container>
  );
};

export default Experience;
