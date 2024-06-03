import { Container, Form, Background } from "./styles"
import {FiUser ,FiMail, FiLock, FiArrowLeft } from "react-icons/fi"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Crie sua conta</h2>
        <Input icon={FiUser} type="text" placeholder="Nome" />
        <Input icon={FiMail} type="text" placeholder="E-mail" />
        <Input icon={FiLock} type="password" placeholder="Senha" />
        <Button title="Cadastrar" />
        <a href="/">
          <FiArrowLeft />
          <span>Voltar para login</span>
        </a>
      </Form>
      <Background />
    </Container>
  )
}
