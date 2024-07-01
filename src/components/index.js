import styled from "styled-components";

export const Container = styled.div`
  min-height: 100dvh;
  padding: 6em 0;
`;

// navigation
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 12rem;
  z-index: 99;
  background-color: ${(props) => (props.color ? props.theme.float : "")};
  transition: background-color 0.5s ease;
`;
export const Logo = styled.div`
  font-size: 48px;
  color: #fff;
  span {
    color: ${(props) => props.theme.primary};
  }
`;
export const Links = styled.ul`
  display: flex;
  list-style: none;
`;
export const Link = styled.li`
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

// typography
export const Header = styled.h1`
  color: ${(props) => (props.primary ? props.theme.primary : "#fff")};
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p``;

export const Illustration = styled.div``;

export const Techstack = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1em;
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 2em;
  h3 {
    font-size: 21px;
    margin-bottom: 1em;
    color: ${(props) => props.theme.primary};
  }
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    list-style: none;
  }
  li {
  }
`;

// introduction
export const Introduction = styled.div`
  min-height: 100dvh;
  padding: 12rem 0;
  .primary {
    color: ${(props) => props.theme.primary};
    font-family: "Pridi", serif;
    font-weight: 400;
    font-style: normal;
  }
  h1 {
    font-size: 2.8em;
    line-height: 2em;
    color: ${(props) => props.theme.header};
  }
  button {
    padding: 8px 16px;
    border: 1px solid ${(props) => props.theme.primary};
    background-color: transparent;
    border-radius: 5px;
    font-family: "Pridi", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1em;
    color: ${(props) => props.theme.primary};
    margin-top: 2em;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.surface};
    }
  }
`;

// summary

export const Wrapper = styled.div`
  position: relative;
  height: 360px;
`;

export const Image = styled.img`
  filter: grayscale(1);
  width: 360px;
  height: 360px;
  border-radius: 1em;
  transition: transform 0.5s ease;
  &:hover {
    filter: grayscale(0);
    transform: scale(1.05);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 2em;
`;
export const Div = styled.div`
  padding: 0 6rem;
`;

// skills
export const SkillContainer = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  justify-items: center;
`;

export const Flex = styled.div`
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
