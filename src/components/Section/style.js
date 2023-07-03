import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 4.9rem;


  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
  }
    
  > div {
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 1000px) { 
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
    }
  }

`;