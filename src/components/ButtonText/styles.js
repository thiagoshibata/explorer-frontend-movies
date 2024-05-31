import styled from "styled-components"

export const Container = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  gap: 8px;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.SALMON};
  font-size: 16px;

  cursor: pointer;
`
