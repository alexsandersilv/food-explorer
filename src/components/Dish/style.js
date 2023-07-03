import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;
  width: 30.4rem;
  background-color: ${({ theme }) => theme.BACKGROUND.DISH};
  border-radius: 0.8rem;

  span {
    float: right;
    cursor: pointer;
  }
  
  div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;

    h1 {
      font-size: 2.4rem;
    }

    footer {
      font-size: 3.2rem;
      color: #82F3FF;
    }
  }
`;

export const Image = styled.img`
  width: 17.6rem;
`;
