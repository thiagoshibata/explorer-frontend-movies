import { Container, Logo, Search, Profile } from "./styles"

export function Header() {
  return (
    <Container>
      <Logo>
        <span>RocketMovies</span>
      </Logo>
      <Search placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>Thiago Shibata</strong>
          <span>Sair</span>
        </div>
        <img
          src="https://github.com/thiagoshibata.png"
          alt="Imagem de perfil"
        />
      </Profile>
    </Container>
  )
}
