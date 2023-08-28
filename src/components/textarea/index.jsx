import { Container } from './style.js'

export function Textarea({value, ...rest}){
  return(
    <Container {...rest}>
      {value}
    </Container>
  )
}