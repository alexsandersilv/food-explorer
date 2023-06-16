import { useAuth } from "../../hooks/auth";

import { Container, Button, SignOutButton } from "./style";

import { useNavigate } from 'react-router-dom'

import brandImage from '../../assets/brand.png';
import brandAdmin from '../../assets/admin.png';

import signOutIcon from '../../assets/signOut.svg';



export function Header() {
  const { signOut } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    signOut()
  }
  
  function handleNewDish() {
    navigate('/add');
  }

  return (
    <Container>
      <img src={brandAdmin} alt="" />

      <input 
        type="search" 
        placeholder="Busque por pratos ou ingredientes"
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