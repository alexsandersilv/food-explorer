import { createContext, useContext } from 'react';

import { api } from '../services/api';

const DishesContext = createContext({});

function hasContent(content, message) {
  if (!content) {
    return alert(message);
  }
}

export function DishesProvider({ children }) {

  async function add({
    image,
    name,
    category,
    ingredients,
    price,
    description
  }) {

   hasContent(image, 'Você não selecionou uma imagem');
   hasContent(name, 'Você não colocou o nome do Prato');
   hasContent(category, 'Você não selecionou a categoria');
   hasContent(ingredients, 'Você não adicionou ingredients');
   hasContent(price, 'Você não adicionou o preço');
   hasContent(description, 'Você não adicionou uma descrição');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
    formData.append('category', category);
    formData.append('ingredients', ingredients);
    formData.append('price', price);
    formData.append('description', description);

    await api.post('/dishes', formData);

    return;
  }


  return (
    <DishesContext.Provider value={{ add }}>
      {children}
    </DishesContext.Provider>
  )
}

export function useDishes() {
  const context = useContext(DishesContext);

  return context;
}