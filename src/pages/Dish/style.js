import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3.2rem;

  > p {
    font-size: 2.4rem;
    margin-bottom: 10.6rem;
    cursor: pointer;
  }
`;

export const Dish = styled.section`
  display: flex;
  justify-content: center;
  gap: 4.7rem;
  > img {
    width: 390.11px;
    height: 389px;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  > h1 {
    font-size: 4rem;
    font-weight: 500;
  }

  > p {
    font-size: 2.4rem;
  }
  
  > div {
    margin-top: 4.6rem;
    > button {
      color: white;
      border: 0;
      border-radius: .5rem;
      background-color: #750310;
      padding: 1.2rem 2.5rem;
      font-size: 1.4rem;
      cursor: pointer;
    }

    > div {
      display: flex;
      align-items: center;
      > div { 
        display: flex;
        gap: 1.4rem;
        > span {
          font-size: 2.5rem;
          cursor: pointer;
        }
      }

      > button {
      margin-left: 3.3rem;
      color: white;
      border: 0;
      border-radius: .5rem;
      background-color: #750310;
      padding: 1.2rem 2.5rem;
      font-size: 1.4rem;
      cursor: pointer;
    }
    }
  }
`;