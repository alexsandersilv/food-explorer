import { useAuth } from "../../hooks/auth";

import { Container, Button, SignOutButton } from "./style";

import { useNavigate } from 'react-router-dom'

import { useDishes } from "../../hooks/dishes";
import brandImage from '../../assets/brand.png';
import brandAdmin from '../../assets/admin.png';

import signOutIcon from '../../assets/signOut.svg';

export function Header() {
  const { signOut } = useAuth();

  const { handleSearch } = useDishes();

  const navigate = useNavigate();

  function handleSignOut() {
    signOut()
  }
  
  function handleNewDish() {
    navigate('/add');
  }

  function handleBackHome() {
    navigate('/')
  }

  return (
    <Container>
      <img onClick={handleBackHome} src={brandAdmin} alt="Brand" />

      <input 
        type="search" 
        placeholder="Busque por pratos ou ingredientes"
        onChange={event => handleSearch(event.target.value)}
      />

      <Button onClick={handleNewDish}>
        Novo Prato
      </Button>

      <SignOutButton onClick={handleSignOut}>
        <img src={signOutIcon} />
      </SignOutButton>
    </Container>
  );
}