import styled from "styled-components"
import BackgroundImg from "../../assets/bg.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.SALMON};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }
  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }

  > a {
    text-align: center;
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center center;
  background-size: cover;
`
