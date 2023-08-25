import { FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/input'
import { Button } from '../../components/button'

import { Container, Form, Background } from './style.js'

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>Fidalguia</h1>
        <p>Aplicação para salvar e gerenciar suas notas</p>

        <h2>Faça seu longin</h2>

        <Input
          placeholder="e-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title='Entrar' />
        
        <a href="#">
          Criar conta
        </a>
      </Form>
      <Background />
    </Container>
  )
}