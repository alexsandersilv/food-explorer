import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 15rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2.37rem 12.3rem;
  background-color: ${({ theme }) => theme.BACKGROUND.FOOTER};
`;
