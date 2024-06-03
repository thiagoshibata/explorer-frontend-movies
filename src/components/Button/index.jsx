/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function Button({ title, del }) {
  return (
    <Container type="button" $del={del}>
      {title}
    </Container>
  )
}
