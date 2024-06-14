import styled from "styled-components";

const Techstack = styled.div`
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

export default Techstack;
