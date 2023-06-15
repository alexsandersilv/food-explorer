import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form } from './style';

import { useAuth } from '../../hooks/auth';

import brandImage from '../../assets/brand.png';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useAuth();

  function handleSignUp(event) {
    event.preventDefault();
    
    signUp({
      name, email, password
    })
  }

  return (
    <Container>

      <img src={brandImage} />

      <Form onSubmit={handleSignUp}>
        <fieldset>
          <legend>Crie sua conta</legend>

          <label htmlFor="name">Seu nome</label>
          <input 
            id="name"
            type="text"
            placeholder='Exemplo: Maria da Silva'
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email"
            placeholder='Exemplo: exemplo@exemplo.com.br'
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Senha</label>
          <input 
            id="password"
            type="password" 
            placeholder='No mínimo 6 caracteres'
            value={password}
            onChange={event => setPassword(event.target.value)}
            min={6}
            required
          />
        </fieldset>
        <Button type="submit">
          Criar Conta
        </Button>
        
        <Link to={'/'}>
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}