import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';

import { Header } from "../../components/Header";
import { Container, Main, Dish, Data } from "./style";
import { Footer } from '../../components/Footer'

import { Ingredients } from '../../components/Ingredients';

export function DishPage() {
  const [dish, setDish] = useState();

  const [dishCount, setDishCount] = useState(0);


  const { user } = useAuth();

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
      console.log(data.dish[0]);
      setDish(data.dish[0]);

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
                {
                  !user.isAmin ? (
                    <button onClick={handleEditDish}>Editar Prato</button>
                  ) : (
                    <div className="controllers">
                      <div>
                        <span onClick={() => setDishCount(dishCount + 1)}>+</span>
                        <span onClick={() => setDishCount(0)}>{dishCount}</span>
                        <span onClick={() => {
                          if (dishCount > 0) {
                            setDishCount(dishCount -1)
                          }
                          }}>-</span>
                      </div>

                      <button>Incluir {' '} - {' '} R${dish.price}</button>
                    </div>
                  )
                }
              </div>
            </Data>
          </Dish>
        </>
      ) : <></> 
      }
      </Main>
      <Footer />
    </Container>
  )
}
