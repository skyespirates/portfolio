import { Container, Header } from "@components";
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
      <Header primary>Experience</Header>
      <ScrollAnimation animateOnce animateIn="fadeIn">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#1E90FF", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #1E90FF" }}
            date="2024 - present"
            iconStyle={{ background: "#1E90FF", color: "#fff" }}
            icon={<BiSolidBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack Developer
            </h3>
            <h6 className="vertical-timeline-element-subtitle">
              Dans Multi Pro
            </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: "#1E90FF", color: "#fff" }}
            icon={<BiSolidBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <h6 className="vertical-timeline-element-subtitle">DMS Software</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2022"
            iconStyle={{ background: "#1E90FF", color: "#fff" }}
            icon={<BiSolidGraduation />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Computer Science
            </h3>
            <h6 className="vertical-timeline-element-subtitle">
              Institut Pertanian Bogor (IPB University)
            </h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </ScrollAnimation>
    </Container>
  );
};

export default Experience;
