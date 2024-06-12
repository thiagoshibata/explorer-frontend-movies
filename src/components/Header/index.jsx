import { Container, Logo, Search, Profile } from "./styles"

import { useAuth } from "../../hooks/auth"

export function Header() {
  const { signOut } = useAuth()
  return (
    <Container>
      <Logo>
        <span>RocketMovies</span>
      </Logo>
      <Search placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <strong>Thiago Shibata</strong>
          <button onClick={signOut}>Sair</button>
        </div>
        <img
          src="https://github.com/thiagoshibata.png"
          alt="Imagem de perfil"
        />
      </Profile>
    </Container>
  )
}
