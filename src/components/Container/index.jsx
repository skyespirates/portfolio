import styled from "styled-components";

const Container = styled.div`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.col || 1}, 1fr)`};
  padding: 5em 0;
`;

export default Container;
