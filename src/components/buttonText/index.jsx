import {Container} from './style.js'

export function ButtonText({title, ...rest}){
  return(
    <Container type="button" {...rest}>
      {title}
    </Container>
  )
}