import styled from 'styled-components';

export const Container = styled.div`
 height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Form = styled.form`
  border: 0;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.BLUE_200};

  padding: 64px;
  width: 476px;

  fieldset {

    border: 0;

    display: flex;
    flex-direction: column;

    legend {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 3.2rem;
      text-align: center;
    }
    
    label {
      color:  ${({ theme }) => theme.COLORS.GRAY_300};;
      text-align: left;
      margin-top: 3.2rem;
      margin-bottom: .2rem;
    }

    input {
      border: 0;
      border-radius: .8rem;
      height: 4.8rem;
      width: 100%;

      padding: 2rem;
      color:  ${({ theme }) => theme.COLORS.GRAY_300};;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none;
    margin-left: 25%;
  }

`;

export const Button = styled.button`
  margin: 4rem 0;

  width: 100%;
  padding: 12px;
  border: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: #750310;

  cursor: pointer;
`;
