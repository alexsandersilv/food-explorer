import { useState } from "react";

import { Link } from "react-router-dom";
import { Container, Form, Button } from "./style"

import brandImage from '../../assets/brand.png';

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { signIn } = useAuth();

  function handleSignIn(event) {
    event.preventDefault();

    signIn({ email, password });
  }

  return (
    <Container>
      
      <img src={brandImage} alt="Brand Logo" />
      <Form onSubmit={handleSignIn}>
        <fieldset>
          <legend>Faça Login</legend>

          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <input 
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={password}
            onChange={event => setPassword(event.target.value)}
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