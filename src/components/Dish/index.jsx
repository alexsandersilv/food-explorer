import { Container } from './style'

export function Dish({ data, ...rest }) {

  return (
    <Container {...rest}>
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <footer>R$ {data.price}</footer>
      </div>
    </Container>
  )
}