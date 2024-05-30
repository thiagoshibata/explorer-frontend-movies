import styled from "styled-components";

export const Container = styled.span`
  padding: 5px 16px;
  font-size: 12px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
`