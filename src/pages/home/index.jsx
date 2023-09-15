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
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])

  function handleTagSelected(tagName){
    const alreadySelected = tagsSelected.includes(tagName)

    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else{
      setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search])

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
            onClick={() => handleTagSelected(todos)}
            isActive={tagsSelected.length === 0}
          />
        </li>

        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          onChange={() => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="minhas notas">
          {
            notes.map(note => (
              <Note key={String(note.id)} data={note}/>
            ))
          }
        </Section>
      </Content>
      <NewNote to="/new"> 
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}