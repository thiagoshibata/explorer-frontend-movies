import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 116px;
  padding: 24px 124px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
`
export const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.SALMON};
`
export const Search = styled.input`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;
  border-radius: 10px;
  padding: 19px 24px;

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }
`
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  gap: 8px;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
