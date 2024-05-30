import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 32px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  .stars {
    display: flex;
    align-items: center;
    gap: 6px;
    svg {
      color: ${({ theme }) => theme.COLORS.SALMON};
      font-size: 12px;
    }
  }
  > h2 {
    font-size: 24px;
    font-weight: 700;
  }
  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    text-align: justify;
    max-height: 52px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > footer {
    display: flex;
    gap: 8px;
  }
`
