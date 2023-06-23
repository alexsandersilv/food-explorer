import { Icon } from '@iconify/react'
import { Container, Image } from './style'

import { api } from '../../services/api'

export function Dish({ data, ...rest }) {

  function handleDashInfo() {
    window.open(`/dish/${data.id}`, "_blank");
  }

  return (
    <Container {...rest}>
      <span onClick={handleDashInfo}>
        <Icon icon="clarity:edit-line" width={35} />
      </span>
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