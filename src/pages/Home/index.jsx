import { Header } from "../../components/Header";
import { Container, Main, Banner, Dishes } from "./style";

import { Section } from "../../components/Section";
import { Dish } from "../../components/Dish";

import bannerImage from '../../assets/banner.png';
import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Home() {
  const [, setDishes] = useState([]);

  const [snack, setSnack] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    function handleListAllDishes() {
      api.get('/dishes')
        .then(response => response.data)
        .then(data => {
          setDishes(data.dish);
          const snackDishes = data.dish.filter(dish => dish.category === 'snack');
          setSnack(snackDishes);

          const dessertsDishes = data.dish.filter(dish => dish.category === 'dessert');
          setDesserts(dessertsDishes);

          const drinksDishes = data.dish.filter(dish => dish.category === 'drinks');
          setDrinks(drinksDishes);
        });
    }

    handleListAllDishes();
  }, []);

  return (
    <Container>
      <Header />


      <Main>
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
            {
              desserts.map((dish, index) => {
                return (
                  <Dish key={index} data={dish} />
                );
              })
            }
          </Section>
          <Section title="Bebidas">
            {
              drinks.map((dish, index) => {
                return (
                  <Dish key={index} data={dish} />
                );
              })
            }
          </Section>
        </Dishes>
      </Main>
    </Container>
  );
}