import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    margin: 48px 0 28px;
    padding: 0 124px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    gap: 24px;
    padding: 16px;
    align-items: center;

    background-color: black;
    border-radius: 8px;
  }
  .buttons{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  > header {
    h1 {
      margin: 40px 0;
    }
  }
  > h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
  }


`
