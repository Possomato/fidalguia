import {RiShutDownLine} from 'react-icons/ri'
import {useAuth} from '../../hooks/auth'

import {Container, Profile, Logout} from './style'

export function Header(){
  const { signOut } = useAuth()
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/possomato.png" alt="foto do usuário" />

        <div>
          <span>Bem-vindo,</span>
          <strong>Gabriel Possomato</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}