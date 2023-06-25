import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Container, BackButton, Main, Form, Input, Inputs, InputWrapperPrimary, InputWrapperSecondary, TextAreaWrapper, TextArea, Button } from "./style";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer'

import uploadImage from '../../assets/UploadSimple.svg';

import { useDishes } from "../../hooks/dishes";

export function AddDish() {
  const [imageFile, setImageFile] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('snack');
  const [ingredients, setIngredients] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [submitBlock, setSubmitBlock] = useState(false);

  const { add } = useDishes();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  async function handleAddDish(event) {
    event.preventDefault();
    setSubmitBlock(true);

    await add({
      image: imageFile,
      name,
      category,
      ingredients,
      price,
      description
    });

    navigate('/');
  }

  function handleDishImage(event) {
    setImageFile(event.target.files[0])
    setImageName(event.target.files[0].name);
  }

  return (
    <Container>
      <Header />

      <Main>
        <BackButton onClick={handleBack}>
          &lt; voltar
        </BackButton>

        <Form onSubmit={handleAddDish}>
          <fieldset>
            <legend>Adicionar Prato</legend>
            <Inputs>
              <InputWrapperPrimary>
                <div>
                  <label htmlFor="dishImage">Imagem do Prato</label>
                  <div>
                    <p>
                      <img src={uploadImage} alt="Upload" />
                      { imageName ? imageName : 'Selecionar Imagem'}
                    </p>
                    <input type="file" id="dishImage" onChange={handleDishImage} />
                  </div>
                </div>

                <div>
                  <label htmlFor="name">Nome do Prato</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ex.: Salada Ceasar"
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="category">Categoria</label>
                  <select
                    id="category"
                    name="category"
                    defaultValue={'snack'}
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                  >
                    <option value="snack">Refeição</option>
                    <option value="dessert">Sobremesas</option>
                    <option value="drinks">Bebidas</option>
                  </select>
                </div>

              </InputWrapperPrimary>
              <InputWrapperSecondary>
                <div>
                  <label htmlFor="ingredients">Ingredientes</label>
                  <Input
                    id="ingredients"
                    type="text"
                    placeholder={`Ingredientes separados por ${' '},${' '} (virgula) EX.: Arroz, Feijão, Bife, Cebola `}
                    value={ingredients}
                    onChange={event => setIngredients(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="price">Preço</label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="R$ 00,00"
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                  />
                </div>
              </InputWrapperSecondary>
              <TextAreaWrapper>
                <label htmlFor="description">Descrição</label>
                <TextArea
                  id="description"
                  placeholder=" Fale brevemente sobre o prato, seus ingredientes e composição"
                  value={description}
                  onChange={event => setDescription(event.target.value)}
                />
              </TextAreaWrapper>
            </Inputs>
          </fieldset>
          <Button type="submit" disabled={submitBlock}>
            Salvar Prato
          </Button>
        </Form>
      </Main>
      <Footer />
    </Container>
  );
}