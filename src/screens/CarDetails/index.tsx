import React from 'react';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton/inde';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

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
  About,
  Acessories,
  Footer
} from './styles';
import { Button } from '../../components/Button';

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

        <Acessories>
          <Accessory name='380Km/h' icon={speedSvg}/>
          <Accessory name='3.2S' icon={accelerationSvg}/>
          <Accessory name='800 HP' icon={forceSvg}/>
          <Accessory name='Gasolina' icon={gasolineSvg}/>
          <Accessory name='Auto' icon={exchangeSvg}/>
          <Accessory name='2 Pessoas' icon={peopleSvg}/>
        </Acessories>

        <About>
          A Fiat Toro é uma picape fabricada pela Fiat no Brasil. 
          Ele é derivado do Fiat FCC4 Concept e é baseado na arquitetura 
          Small Wide 4×4 compartilhada com o Jeep Renegade, Jeep Compass e o Fiat 500X.
        </About>
      </Content>

      <Footer>
        <Button title='Confirmar'/>
      </Footer>

    </Container>
  );
}