import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" />
            <h1>Novo filme</h1>
          </header>
          <Input placeholder="Título" />
          <Input type="number" placeholder="sua nota (0 a 5)" />
          <Textarea placeholder="Observações" />
          <h2>Marcadores</h2>
          <div className="tags">
            <MovieItem value="React" />
            <MovieItem placeholder="Novo marcador" isNew />
          </div>
          <div className="buttons">
            <Button title="Excluir filme" del />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}
