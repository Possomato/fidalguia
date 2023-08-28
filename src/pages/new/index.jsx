import { Container, Form } from './style.js'

import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { Textarea } from '../../components/textarea'
import { NoteItem } from '../../components/noteitem'
import { Section } from '../../components/section'

export function New(){
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título" />

          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="comunidade" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>
        </Form>
      </main>
    </Container>
  )
}