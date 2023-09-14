import { useState, useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './style.js'

import { api } from '../../services/api'

import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'
import { Input } from '../../components/input'
import { Section } from '../../components/section'
import { Note } from '../../components/note'

export function Home(){
  const [tags, setTags] = useState([])

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])
  return(
    <Container>
      <Brand>
        <h1>Fidalguia</h1>
      </Brand>

      <Header />

      <Menu>
         <li>
          <ButtonText
            title='TODOS'
            isActive
          />
        </li>

        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText title={tag.name} />
            </li>
          ))
        }
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
      <NewNote to="/new"> 
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}