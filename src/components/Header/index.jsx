import { Icon } from "@iconify/react";

import { useAuth } from "../../hooks/auth";

import { Container, Button, SignOutButton } from "./style";

import { useNavigate } from 'react-router-dom'

import { useDishes } from "../../hooks/dishes";

import brandAdmin from '../../assets/brand/brandAdmin.png';
import brandNoAdmin from '../../assets/brand/brandNoAdmin.png';

import signOutIcon from '../../assets/signOut.svg';

export function Header() {
  const { signOut, user } = useAuth();

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
      <img onClick={handleBackHome} src={user.isAdmin ? brandAdmin : brandNoAdmin} alt="Brand" />

      <input
        type="search"
        placeholder="Busque por pratos ou ingredientes"
        onChange={event => handleSearch(event.target.value)}
      />
      {
        user.isAdmin ? (
          <Button onClick={handleNewDish}>
            Novo Prato
          </Button>
        ) : (
          <Button>
            <Icon icon="ph:receipt" width={32} />
            Pedidos (0)
          </Button>
        )
      }


      <SignOutButton onClick={handleSignOut}>
        <Icon icon="uit:signout" color="white" width={32} />
      </SignOutButton>
    </Container>
  );
}