import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.4rem;

  background-color: #0D0C0F;

  border-radius: .8rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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