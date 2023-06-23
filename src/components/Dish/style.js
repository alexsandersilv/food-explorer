import styled from 'styled-components';

export const Container = styled.div`

  width: 30.4rem;
  height: 46.2rem;
  background-color: #00070A;

  border-radius: .8rem;

  span {
    float: right;
    cursor: pointer;
  }
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    height: 100%;

    padding: 2.4rem;

    gap: 1rem;


    h1 {
      font-size: 2.4rem;
    }

    footer {
      font-size: 3.2rem;
      color: #82F3FF
    }
  }
`;

export const Image = styled.img`
  width: 100%;
`;