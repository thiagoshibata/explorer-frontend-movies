import styled from "styled-components"

import { Link } from "react-router-dom"

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
    margin: 48px 0 12px;
    padding: 0 124px;

    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 32px;
        font-weight: 400;
      }
    }
  }
`

export const NewMovie = styled(Link)`
  display: flex;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.SALMON};
  padding: 12px 32px;
  border-radius: 8px;
  width: 208px;

  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  align-items: center;

  cursor: pointer;
`
export const Content = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`
