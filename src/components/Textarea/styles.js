import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  border-radius: 10px;
  padding: 16px;

  font-size: 16px;
  font-weight: 400;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }
`
