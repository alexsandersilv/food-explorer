import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.BACKGROUND.HEADER};
  padding: 2.28rem 0;

  img {
    margin: auto 0;
    height: 3rem;
  }

  input {
    width: 50%;
    height: 4.8rem;
    border: 0;
    border-radius: .5rem;
    text-align: center;
    background-color: ${({ theme }) => theme.BACKGROUND.INPUT};
    display: block;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: .8rem;
  background-color: ${({ theme }) => theme.BACKGROUND.BUTTON};
  border: 0;
  border-radius: .5rem;
  height: 4.8rem;
  padding: 1.2rem 6.85rem;
`;

export const SignOutButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

