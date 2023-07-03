import { Container, Ingredient } from './style.js';

export function Ingredients({ data }) {
  const ingredientsList = String(data).split(',');

  return (
    <Container>
      <div>
        {ingredientsList.map((ingredient, index) => {
          return (
            <Ingredient key={index}>
              {ingredient}
            </Ingredient>
          )
        })}
      </div>
    </Container>
  );
}