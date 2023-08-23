import { Container, Links } from './style'

import { Header } from '../../components/header'
import { Button } from '../../components/button/'
import { Section } from '../../components/section'

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

      <Button title="Voltar" />
    </Container>
  )
}