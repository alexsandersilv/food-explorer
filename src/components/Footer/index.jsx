import  { Container } from './style';

import brandFooter from '../../assets/brand/brandFooter.png';

export function Footer() {
  return (
    <Container>
      <p>
        <img src={brandFooter} />
      </p>
      <p>
        © 2023 - Todos os direitos reservados.
      </p>
    </Container>
  )
}