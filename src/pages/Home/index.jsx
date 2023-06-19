import { Header } from "../../components/Header";
import { Container, BannerContainer, Banner, Dishes } from "./style";

import { Section } from "../../components/Section";
import { Dish } from "../../components/Dish";

import bannerImage from '../../assets/banner.png';
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
  const [dishes, setDishes] = useState([]);

  const [snack, setSnack] = useState([]);


  useEffect(() => {
    function handleListAllDishes() {
      api.get('/dishes')
        .then(response => response.data)
        .then(data => {
          setDishes(data.dish);
          const snackDishes = data.dish.filter(dish => dish.category === 'snack');
          setSnack(snackDishes);
        });
    }

    handleListAllDishes();
  }, []);

  return (
    <Container>
      <Header />


      <BannerContainer>
        <Banner src={bannerImage} />

        <Dishes>
          <Section title="Refeição">
            {
              snack.map((dish, index) => {
                return (
                  <Dish key={index} data={dish} />
                );
              })
            }
          </Section>
          <Section title="Sobremesas">

          </Section>
          <Section title="Bebidas">

          </Section>
        </Dishes>
      </BannerContainer>
    </Container>
  );
}