import styled from "styled-components"

export const Container = styled.div`
  > main {
    grid-area: content;
    overflow-y: scroll;
    margin: 48px 0 12px;
    padding: 0 124px;
  }
`

export const Content = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  > header {
    display: flex;
    align-items: center;

    h1 {
      font-size: 36px;
      font-weight: 500;
      margin-right: 19px;
    }
    svg {
      margin-right: 8px;
      color: ${({ theme }) => theme.COLORS.SALMON};
      font-size: 20px;
      gap: 8px;
    }
  }
  p {
    text-align: justify;
  }
  .info-movie {
    display: flex;
    align-items: center;

    img {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-right: 8px;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.SALMON};
      margin: 0 8px;
    }
  }
  .tags {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`
