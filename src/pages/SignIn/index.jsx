import { Container, Form, Background } from "./styles"
import { FiMail, FiLock } from "react-icons/fi"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>
        <Input icon={FiMail} type="text" placeholder="E-mail" />
        <Input icon={FiLock} type="password" placeholder="Senha" />
        <Button title="Entrar" />
        <a href="/">Criar Conta</a>
      </Form>
      <Background />
    </Container>
  )
}
