import { Header } from "../../components/Header";
import { Container, BannerContainer, Banner } from "./style";

import bannerImage from '../../assets/banner.png';

export function Home() {
  return (
    <Container>
      <Header />
    
      <BannerContainer>
        <Banner src={bannerImage} />
      </BannerContainer>
    </Container>
  );
}