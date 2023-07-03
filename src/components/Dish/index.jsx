import { Icon } from '@iconify/react';
import { Container, Image } from './style';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function Dish({ data, ...rest }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  function handleDashInfo() {
    navigate(`/dish/${data.id}`);
  }

  function handleEditDish() {
    navigate(`/edit/${data.id}`);
  }

  const isAdmin = user.isAdmin;
  const dishImage = `${api.defaults.baseURL}/files/${data.img}`;

  return (
    <Container {...rest}>
      {isAdmin ? (
        <span onClick={handleEditDish}>
          <Icon icon="clarity:edit-line" width={35} />
        </span>
      ) : (
        <span style={{ cursor: 'default' }}>
          <Icon icon="teenyicons:heart-outline" width={35} />
        </span>
      )}

      <div onClick={handleDashInfo}>
        <Image src={dishImage} />
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <footer>R$ {data.price}</footer>
      </div>
    </Container>
  );
}
