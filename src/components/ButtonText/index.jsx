/* eslint-disable react/prop-types */
import { FiArrowLeft } from 'react-icons/fi';
import { Container } from "./styles";

export function ButtonText({title}) {

  return (
    <Container>
      <FiArrowLeft/>
      {title}
    </Container>
  )
}