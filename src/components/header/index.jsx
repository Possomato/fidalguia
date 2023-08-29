import {RiShutDownLine} from 'react-icons/ri'

import {Container, Profile, Logout} from './style'

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/possomato.png" alt="foto do usuário" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Gabriel Possomato</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}