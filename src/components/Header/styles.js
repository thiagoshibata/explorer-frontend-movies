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

  border-bottom: 1px solid #3e3b47;
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

  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 10px;
  padding: 19px 24px;

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }
`
export const Profile = styled.div`
  min-width: 208px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  > div {
    display: flex;
    flex-direction: column;
    text-align: right;

    button {
      display: flex;
      justify-content: right;
      background: none;
      border: none;
      font-size: 14px;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.GRAY_800};
      cursor: pointer;
    }
    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
