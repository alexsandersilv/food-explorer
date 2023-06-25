import { Icon } from '@iconify/react'
import { Container, Image } from './style'

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';

export function Dish({ data, ...rest }) {

  const { user } = useAuth();

  function handleDashInfo() {
    window.open(`/dish/${data.id}`, "_blank");
  }

  function handleEditDish() {
    window.open(`/edit/${data.id}`)
  }



  return (
    <Container {...rest}>
      {user.isAdmin ?
        (
          <span onClick={handleEditDish}>
            <Icon icon="clarity:edit-line" width={35} />
          </span>
        ) : (
          <span style={{ cursor: 'default' }}>
            <Icon icon="teenyicons:heart-outline" width={35} />
          </span>
        )}

      <div  onClick={handleDashInfo}>
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