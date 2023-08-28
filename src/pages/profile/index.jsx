import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/input'
import { Button } from '../../components/button'

import { Container, Form, Avatar } from './style.js'

export function Profile(){
  return(
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft />
        </a>
      </header> 

      <Form>
        <Avatar>
          <img src="https://github.com/possomato.png"
          alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input
          placeholder="nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="e-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="senha nova"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}