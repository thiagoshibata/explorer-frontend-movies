import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Container, Form, Avatar } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText title="Voltar" />
      </header>
      <main>
        <Form>
          <Avatar>
            <img
              src="https://github.com/thiagoshibata.png"
              alt="Foto do usuário"
            />
            <label htmlFor="avatar">
              <FiCamera />
              <input id="avatar" type="file" />
            </label>
          </Avatar>
          <Input icon={FiUser} placeholder="Thiago Shibata" />
          <Input icon={FiMail} placeholder="thiago.shibatta@gmail.com" />
          <Input icon={FiLock} type="password" placeholder="Senha atual" />
          <Input icon={FiLock} type="password" placeholder="Nova senha" />
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}
