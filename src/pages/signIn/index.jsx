import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Input } from '../../components/input'
import { Button } from '../../components/button'

import { Container, Form, Background } from './style.js'

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>Fidalguia</h1>
        <p>Aplicação para salvar e gerenciar suas notas</p>

        <h2>Faça seu login</h2>

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
        
        <Link to="/register">
          Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  )
}