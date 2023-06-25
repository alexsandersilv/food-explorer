import { Header } from "../../components/Header";
import { Container, Main, Banner, Dishes } from "./style";

import { Section } from "../../components/Section";
import { Dish } from "../../components/Dish";

import bannerImage from '../../assets/banner.png';
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useDishes } from "../../hooks/dishes";
import { Footer } from "../../components/Footer";

export function Home() {
  const [snack, setSnack] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const { search } = useDishes();



  useEffect(() => {
    function handleListAllDishes() {
      api.get('/dishes')
        .then(response => response.data)
        .then(data => {
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

  function SnackDishes() {
    if (search) {
      return (
        <>
        {
          snack.filter(dish => dish.name.toLowerCase().startsWith(search.toLowerCase()))
          .map((dish, index) => {
            return (
              <Dish key={index} data={dish} />
            );
          })
        }
        </>
      )
    } else {
      return (
        <>
        {
          snack.map((dish, index) => {
            return (
              <Dish key={index} data={dish} />
            );
          })
        }
        </>
      );
    }
  
  }

  function DessertsDishes() {
    if (search) {
      return (
        <>
        {
          desserts.filter(dish => dish.name.toLowerCase().startsWith(search.toLowerCase()))
          .map((dish, index) => {
            return (
              <Dish key={index} data={dish} />
            );
          })
        }
        </>
      )
    } else {
      return (
        <>
        {
          desserts.map((dish, index) => {
            return (
              <Dish key={index} data={dish} />
            );
          })
        }
        </>
      );
    }
  }

  function DrinksDishes() {
    if (search) {
      return (
        <>
        {
          drinks.filter(dish => dish.name.toLowerCase().startsWith(search.toLowerCase()))
          .map((dish, index) => {
            return (
              <Dish key={index} data={dish} />
            );
          })
        }
        </>
      )
    } else {
      return (
        <>
        {
          drinks.map((dish, index) => {
            return (
              <Dish key={index} data={dish} />
            );
          })
        }
        </>
      );
    }
  }

  return (
    <>
    
    <Container>
      <Header />
      <Main>
        <Banner src={bannerImage} />

        <Dishes>
          <Section title="Refeição">
           <SnackDishes />
          </Section>
          <Section title="Sobremesas">
            <DessertsDishes />
          </Section>
          <Section title="Bebidas">
            <DrinksDishes />
          </Section>
        </Dishes>
      </Main>
      <Footer />
    </Container>
    </>
  );
}