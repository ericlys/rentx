import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton/inde';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

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
  Acessories,
  Footer,
  CalendarIcon,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,


} from './styles';

export function SchedulingDetails(){
  const theme = useTheme();
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
            <Price>R$ 360</Price>
          </Rend>
        </Details>

        <Acessories>
          <Accessory name='197Km/h' icon={speedSvg}/>
          <Accessory name='11S' icon={accelerationSvg}/>
          <Accessory name='180 HP' icon={forceSvg}/>
          <Accessory name='Diesel' icon={gasolineSvg}/>
          <Accessory name='Auto' icon={exchangeSvg}/>
          <Accessory name='5 Pessoas' icon={peopleSvg}/>
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}/>
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>21/06/2022</DateValue>
          </DateInfo>
          <Feather 
              name='chevron-right'
              size={RFValue(10)}
              color={theme.colors.text}/>
          <DateInfo>
          <DateTitle>ATÉ</DateTitle>
          <DateValue>26/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 360 x6 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.160</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title='Confirmar'/>
      </Footer>

    </Container>
  );
}