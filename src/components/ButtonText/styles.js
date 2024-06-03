import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  border: none;
  background-color: transparent;
  display: flex;
  gap: 8px;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.SALMON};
  font-size: 16px;

  cursor: pointer;
`
