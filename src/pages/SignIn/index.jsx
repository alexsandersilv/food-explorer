import { Link } from "react-router-dom";
import { Container, Form, Button } from "./style"

import brandImage from '../../assets/brand.png';

export function SignIn() {
  return (
    <Container>
      
      <img src={brandImage} alt="Brand Logo" />
      <Form>
        <fieldset>
          <legend>Faça Login</legend>

          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />

          <label htmlFor="password">Senha</label>
          <input 
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
          />
        </fieldset>
        <Button>
          Entrar
        </Button>
        
        <Link to={'/register'}>
          Criar uma conta
        </Link>
      </Form>
    </Container>
  )
}