import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './style.js'

import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'
import { Input } from '../../components/input'
import { Section } from '../../components/section'
import { Note } from '../../components/note'

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
        <Section title="minhas notas">
          <Note data={{
            title: 'Os irmãos Karamázov',
            tags: [
              {id: '1', name: 'Dostoiévski'},
              {id: '2', name: 'Literatura'}
            ],
            }} />
            <Note data={{
            title: 'Apologia de Sócrates',
            tags: [
              {id: '1', name: 'Platão'},
              {id: '2', name: 'Filosofia'}
            ],
            }} />
        </Section>
      </Content>
      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}