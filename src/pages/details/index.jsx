import { Container, Links, Content } from './style'

import { Header } from '../../components/header'
import { Button } from '../../components/button/'
import { ButtonText } from '../../components/buttonText/'
import { Section } from '../../components/section'
import { Tag } from '../../components/tag'

export function Details(){
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title='excluir nota' />

          <h1>Fiódor Dostoiévski</h1>

          <p>
          Dostoiévski começou a escrever durante seu exílio na Sibéria. Seu primeiro romance, "Gente Pobre" (1846), já apresentava traços de sua escrita distintiva, com uma abordagem profunda dos sentimentos e motivações dos personagens. No entanto, foi com "Crime e Castigo" (1866) que ele alcançou o reconhecimento internacional. A história do atormentado Raskólnikov explorou temas de culpa, redenção e moralidade, cativando leitores com sua narrativa intensa e análise psicológica.

          Dostoiévski continuou a criar obras-primas literárias, incluindo "O Idiota" (1869), "Os Demônios" (1872) e "Os Irmãos Karamazov" (1880), esta última frequentemente considerada sua obra-prima. Nestas obras, ele mergulhou nas profundezas da mente humana, examinando questões filosóficas e religiosas, bem como os dilemas morais que moldam nossas escolhas.
          </p>

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

        </Content>
      </main>
    </Container>
  )
}