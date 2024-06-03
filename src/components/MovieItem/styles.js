import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, $isnew }) =>
    $isnew ? "transparente" : theme.COLORS.BACKGROUND_700};

  color: ${({ theme }) => theme.COLORS.GRAY_800};

  border: ${({ theme, $isnew }) =>
    $isnew ? `1px dashed ${theme.COLORS.GRAY_800}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.SALMON};
    cursor: pointer;
  }


  > input {
    height: 56px;
    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
  }
`
