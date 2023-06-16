import styled from 'styled-components';


export const Container = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.COLORS.HEADER};

  padding: 2.28rem 0;


  input {
    width: 50%;

    background-color: #0D1D25;
    border: 0;
    border-radius: .5rem;
    text-align: center;
    
    color: white;
  }
`;

export const Button = styled.button`
  color: white;

  background-color: ${({ theme }) => theme.COLORS.BUTTONS};
  border: 0;
  border-radius: .5rem;

  padding: 1.2rem 6.85rem;
`;


export const SignOutButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;