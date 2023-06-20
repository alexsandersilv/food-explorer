import { Container, Image } from './style'

import { api } from '../../services/api'

export function Dish({ data, ...rest }) {

  return (
    <Container {...rest}>
      <div>
        <p>
          <Image src={`${api.defaults.baseURL}/files/${data.img}`} />
        </p>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <footer>R$ {data.price}</footer>
      </div>
    </Container>
  )
}