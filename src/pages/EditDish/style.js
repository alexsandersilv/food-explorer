import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Main = styled.main`
  width: 100%;
  padding: 4rem 12.3rem 0%;

`;

export const BackButton = styled.div`
  color: white;
  font-size: 2.4rem;
  cursor: pointer;
`;


export const Form = styled.form`

  margin: 3.2rem 0;

  width: 100%;
  fieldset {
    border: 0;
    
    legend {
      color: white;
      font-size: 3.2rem;

      font-weight: normal;
      border: 0;

      margin-bottom: 3.2rem;
    }

  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;

`;

export const InputWrapperPrimary = styled.div`
  display: flex;
  width: 100%;

  gap: 3.2rem;
  
  label {
    margin-bottom: 1.6rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div:nth-child(1) {
    width: 17%;

    div {
      width: 100%;
      position: relative;
      display: inline-block;

    p {
      display: flex;
      align-items: center;
      gap: 0.8em;

      background-color: ${({ theme }) => theme.COLORS.INPUTS};
      border: 0;
      border-radius: .5rem;
      color: white;
      padding: 1.4rem 1.6rem;
      width: 100%;

      img {
        margin-left: .5rem;
      }
    }

    input[type="file"] {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  }
  }

  div:nth-child(2) {
    width: 66%;
  }

  div:nth-child(3) {
    width: 17%;
  }

  select {
    background-color: ${({ theme }) => theme.COLORS.INPUTS};
    border: 0;
    border-radius: .5rem;

    color: white;
    padding: 1.4rem 1.6rem;
  }
`;

export const InputWrapperSecondary = styled.div`
  display: flex;
  width: 100%;

  gap: 3.2rem;
  
  label {
    margin-bottom: 1.6rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div:nth-child(1) {
    width: 85%;
    
    div {
      width: 100%;
    
    }
  }

  div:nth-child(2) {
    width: 15%;
  }


  select {
    background-color: ${({ theme }) => theme.COLORS.INPUTS};
    border: 0;
    border-radius: .5rem;

    color: white;
    padding: 1.4rem 1.6rem;
  }
`;

export const TextAreaWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 1.6rem;
  }
`;

export const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.COLORS.INPUTS};
  border: 0;
  border-radius: .5rem;
  color: white;
  padding: 1.4rem .2rem;
  height: 17.2rem;
  resize: none;

`;



export const Input = styled.input`
  background-color: ${({ theme }) => theme.COLORS.INPUTS};
  border: 0;
  border-radius: .5rem;
  color: white;
  padding: 1.4rem 1.6rem;
  width: 100%;
`;

export const BtnArea = styled.div`
  margin-top: 4.4rem;
  display: flex;
  flex-direction: row-reverse;
  gap: 3.2rem;
`;

export const ButtonAdd = styled.button`
  padding: 1.2rem 2.4rem;

  border: 0;
  border-radius: 5px;

  color: white;
  background-color: #AB4D55;
  
`;

export const ButtonRm = styled.button`
  background-color: #0D161B;  
  padding: 1.2rem 2.4rem;
  border: 0;
  border-radius: 5px;

  color: white;
`;