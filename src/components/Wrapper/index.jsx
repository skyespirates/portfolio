import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.align || "start"};
  align-items: ${(props) => props.align || "start"};
  gap: ${(props) => `${props.gap}em` || 0};
`;
