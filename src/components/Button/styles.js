import styled from "styled-components"

export const Container = styled.button`
  padding: 16px;
  width: 100%;
  border: none;
  border-radius: 10px;

  cursor: pointer;

  background-color: ${({ theme, $del }) =>
    $del ? "#000" : theme.COLORS.SALMON};

  color: ${({ theme, $del }) => ($del ? theme.COLORS.SALMON : "#000")};
`
