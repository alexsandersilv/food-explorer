import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Header } from "../../components/Header";
import { Container, Main, Dish, Data } from "./style";

import { Ingredients } from '../../components/Ingredients';

export function DishPage() {
  const [dish, setDish] = useState();

  const navigate = useNavigate();
  const params = useParams();

  function handleBack() {
    navigate(-1);
  }

  function handleEditDish() {
    navigate(`/edit/${params.id}`)
  }

  useEffect(() => {
    async function handleDish() {
      const { data } = await api.get(`/dishes/info/${params.id}`);
      setDish(data.data[0]);

    }
    handleDish();
  }, []);

  return (
    <Container>
      <Header />

      <Main>{
      dish ? (
        <>
          <p onClick={handleBack}>
            &lt; Voltar
          </p>
          <Dish>
            <img src={`${api.defaults.baseURL}/files/${dish.img}`} alt={dish.name} />
            <Data>
              <h1>{dish.name}</h1>
              <p>{dish.description}</p>
              <Ingredients data={dish.ingredients}/>
              <div>
                <button onClick={handleEditDish}>Editar Prato</button>
              </div>
            </Data>
          </Dish>
        </>
      ) : <></> 
      }
      </Main>
    </Container>
  )
}
