import styled from "styled-components";

export const Header = styled.h1`
  color: ${(props) => (props.primary ? props.theme.primary : "#fff")};
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p``;
