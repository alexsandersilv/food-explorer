import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { useAuth } from "../../hooks/auth";
import { useDishes } from "../../hooks/dishes";

import { Container, Button, SignOutButton } from "./style";

import brandAdmin from '../../assets/brand/brandAdmin.png';
import brandNoAdmin from '../../assets/brand/brandNoAdmin.png';

export function Header() {
  const { signOut, user } = useAuth();
  const { handleSearch } = useDishes();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
  }

  function handleNewDish() {
    navigate('/add');
  }

  function handleBackHome() {
    navigate('/');
  }

  useEffect(() => {
    handleSearch('');
  }, []);

  const isAdmin = user.isAdmin;

  return (
    <Container>
      <img onClick={handleBackHome} src={isAdmin ? brandAdmin : brandNoAdmin} alt="Brand" />
      <input
        type="search"
        placeholder="Busque por pratos ou ingredientes"
        onChange={event => handleSearch(event.target.value)}
      />

      {isAdmin ? (
        <Button onClick={handleNewDish}>
          Novo Prato
        </Button>
      ) : (
        <Button>
          <Icon icon="ph:receipt" width={32} />
          Pedidos (0)
        </Button>
      )}

      <SignOutButton onClick={handleSignOut}>
        <Icon icon="uit:signout" color="white" width={32} />
      </SignOutButton>
    </Container>
  );
}
