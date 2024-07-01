import { useState } from "react";
import { Nav, Logo, Links, Link } from "@components";
const Navigation = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 72) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <Nav color={color}>
      <Logo>
        &lt;<span>Aziz</span>/&gt;
      </Logo>
      <Links>
        <Link>
          <a href="#intro">Intro</a>
        </Link>
        <Link>
          <a href="#summary">Summary</a>
        </Link>
        <Link>
          <a href="#skills">Skills</a>
        </Link>
        <Link>
          <a href="#experience">Experience</a>
        </Link>
      </Links>
    </Nav>
  );
};

export default Navigation;
