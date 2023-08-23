import { Container, Links } from './style'

import { Header } from '../../components/header'
import { Button } from '../../components/button/'
import { Section } from '../../components/section'
import { Tag } from '../../components/tag'

export function Details(){
  return (
    <Container>
      <Header />

      <Section title='Links úteis'>
        <Links>
          <li><a href="#">Os irmãos Karamazov</a></li>
          <li><a href="#">Crime e Castigo</a></li>
        </Links>
      </Section>

      <Section title='marcadores'>
        <Tag title='Literatura'></Tag>
        <Tag title='Biografia'></Tag>
      </Section>

      <Button title="Voltar" />
    </Container>
  )
}