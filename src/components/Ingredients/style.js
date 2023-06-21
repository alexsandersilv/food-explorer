import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.4rem;
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    width: 70rem;
  }
`;

export const Ingredient = styled.span`
  padding: .4rem .8rem;
  background-color: #192227;
  border-radius: .5rem;
`;