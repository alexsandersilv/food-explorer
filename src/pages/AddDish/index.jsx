import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Container, BackButton, Main, Form, Input, Inputs, InputWrapperPrimary, InputWrapperSecondary, TextAreaWrapper, TextArea, Button } from "./style";

import { Header } from '../../components/Header';

import uploadImage from '../../assets/UploadSimple.svg';
import { api } from "../../services/api";

export function AddDish() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [price, setPrice] = useState();
  const [description, setDescription] = useState('');

  const [dishImage, setDishImage] = useState();
  const [imageFile, setImageFile] = useState(null)

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  async function handleAddDish(event) {
    event.preventDefault();

    const fileUploadForm = new FormData();
    fileUploadForm.append("img", imageFile);

    await api.post('/dishes', {
      img: fileUploadForm,
      name,
      category,
      ingredients,
      price,
      description
    })
  }
  function handleDishImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setDishImage(imagePreview);

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
                      Selecionar Imagem
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
                    defaultValue={'Refeição'}
                    value={category}
                    onChange={event => setCategory(event.target.value)}  
                  >
                    <option value="snack">Refeição</option>
                    <option value="dessert">Sobremesas</option>
                    <option value="bebidas">Bebidas</option>
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
          <Button>
            Salvar Prato
          </Button>
        </Form>
      </Main>

    </Container>
  );
}