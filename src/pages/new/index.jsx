import { Container, Form } from './style.js'

import { Link } from 'react-router-dom'

import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Textarea } from '../../components/textarea'
import { NoteItem } from '../../components/noteitem'
import { Section } from '../../components/section'
import { Button } from '../../components/button'

export function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título" />

          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="comunidade" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
            <NoteItem value="Socrates" />
            <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title='Salvar' />
        </Form>
      </main>
    </Container>
  )
}