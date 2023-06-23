import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Container, BackButton, Main, Form, Input, Inputs, InputWrapperPrimary, InputWrapperSecondary, TextAreaWrapper, TextArea, BtnArea, ButtonAdd, ButtonRm } from "./style";

import { Header } from '../../components/Header';

import uploadImage from '../../assets/UploadSimple.svg';

import { useDishes } from "../../hooks/dishes";
import { useEffect } from "react";
import { api } from "../../services/api";

export function EditDish() {
  const [imageFile, setImageFile] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('snack');
  const [ingredients, setIngredients] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [submitBlock, setSubmitBlock] = useState(false);

  const { update } = useDishes();

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  async function handleUpdateDish(event) {
    event.preventDefault();
    setSubmitBlock(true);

    await update({
      id: params.id,
      image: imageFile,
      name,
      category,
      ingredients,
      price,
      description
    });

    navigate(`/dish/${params.id}`)

  }

  function handleDishImage(event) {
    setImageFile(event.target.files[0])
    setImageName(event.target.files[0].name);
  }

  useEffect(() => {
    async function handleDish() {
      const { data } = await api.get(`/dishes/info/${params.id}`);

      setName(data.data[0].name);
      setCategory(data.data[0].category);
      setIngredients(data.data[0].ingredients);
      setPrice(data.data[0].price);
      setDescription(data.data[0].description);

    }
    handleDish();
  }, []);

  return (
    <Container>
      <Header />

      <Main>
        <BackButton onClick={handleBack}>
          &lt; voltar
        </BackButton>

        <Form onSubmit={handleUpdateDish}>
          <fieldset>
            <legend>Editar Prato</legend>
            <Inputs>
              <InputWrapperPrimary>
                <div>
                  <label htmlFor="dishImage">Imagem do Prato</label>
                  <div>
                    <p>
                      <img src={uploadImage} alt="Upload" />
                      {imageName ? imageName : 'Selecionar Imagem'}
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
          <BtnArea>
            <ButtonAdd type="submit" disabled={submitBlock}>
              Salvar Alterações
            </ButtonAdd>

            <ButtonRm>
              Excluir Prato
            </ButtonRm>

          </BtnArea>
        </Form>
      </Main>

    </Container>
  );
}