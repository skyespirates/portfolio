import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 3em;
`;
const Logo = styled.div`
  font-size: 48px;
  color: #fff;
  span {
    color: ${(props) => props.theme.primary};
  }
`;
const Links = styled.ul`
  display: flex;
  list-style: none;
`;
const Link = styled.li`
  padding: 4px 8px;
  border-radius: 5px;
  &:hover {
    a {
      color: ${(props) => props.theme.primary};
    }
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.secondary};
  }
`;

const Navigation = () => {
  return (
    <Nav>
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
