import React from 'react';
import { BackButton } from '../../components/BackButton/inde';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rend,
  Period,
  Price,
  About
} from './styles';

export function CarDetails(){
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}}/>
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={['https://production.autoforce.com/uploads/version/profile_image/6190/comprar-ranch-turbo-diesel-at9_cdc67fb425.png']} 
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Fiat</Brand>
            <Name>TORO</Name>
          </Description>

          <Rend>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rend>
        </Details>

        <About>
          A Fiat Toro é uma picape fabricada pela Fiat no Brasil. 
          Ele é derivado do Fiat FCC4 Concept e é baseado na arquitetura 
          Small Wide 4×4 compartilhada com o Jeep Renegade, Jeep Compass e o Fiat 500X.
        </About>
      </Content>

    </Container>
  );
}