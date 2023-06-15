import { Link } from 'react-router-dom';
import { Button, Container, Form } from './style';

import brandImage from '../../assets/brand.png';

export function SignUp() {
  return (
    <Container>

      <img src={brandImage} />

      <Form>
        <fieldset>
          <legend>Crie sua conta</legend>

          <label htmlFor="name">Seu nome</label>
          <input 
            id="name"
            type="text"
            placeholder='Exemplo: Maria da Silva' 
          />

          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email"
            placeholder='Exemplo: exemplo@exemplo.com.br'
          />

          <label htmlFor="password">Senha</label>
          <input 
            id="password"
            type="password" 
            placeholder='No mínimo 6 caracteres'
          />
        </fieldset>
        <Button>
          Criar Conta
        </Button>
        
        <Link to={'/'}>
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}