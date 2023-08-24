import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './style.js'

import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'
import { Input } from '../../components/input'

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>Fidalguia</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title='TODOS' isActive /></li>
        <li><ButtonText title='BIOGRAFIAS' /></li>
        <li><ButtonText title='ANOTAÇÕES' /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>

      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}