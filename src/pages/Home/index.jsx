import { TfiPlus } from "react-icons/tfi"
import { Container, NewMovie, Content } from "./styles"

import { Header } from "../../components/Header"
import { Movie } from "../../components/Movie"

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <header>
          <h1>Meus filmes</h1>
          <NewMovie>
            <TfiPlus />
            Adicionar filme
          </NewMovie>
        </header>
        <Content>
          <Movie
            data={{
              title: "Interestellar",
              description:
                "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper.",
              tags: [
                {
                  id: "1",
                  name: "Ficção Científica",
                },
                {
                  id: "2",
                  name: "Drama",
                },
              ],
            }}
          />
          <Movie
            data={{
              title: "Interestellar",
              description:
                "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper.",
              tags: [
                {
                  id: "1",
                  name: "Ficção Científica",
                },
                {
                  id: "2",
                  name: "Drama",
                },
              ],
            }}
          />
        </Content>
      </main>
    </Container>
  )
}
