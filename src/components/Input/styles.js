import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    background-color: transparent;
    border: 0;
    border-radius: 10px;

    padding: 18px 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
  }
  > svg {
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }
`
