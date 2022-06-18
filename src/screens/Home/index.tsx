import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars
} from './styles';

export function Home(){

  const carDataOne = {
    brand: 'fiat',
    name: 'TORO',
    rent: {
      period: 'AO DIA',
      price: 230,
    },
    thumbnail: 'https://production.autoforce.com/uploads/version/profile_image/6190/comprar-ranch-turbo-diesel-at9_cdc67fb425.png'
  }
  const carDataTwo = {
    brand: 'volkswagen',
    name: 'Gol',
    rent: {
      period: 'AO DIA',
      price: 160,
    },
    thumbnail: 'https://carros0.com.br/wp-content/uploads/novo-gol-2022-580x375.png'
  }

  return (
    <Container>
      <StatusBar
        style='light'
        // translucent={false}
        backgroundColor='transparent'
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
            />
          <TotalCars>
            Totoal de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carDataOne}/>
      <Car data={carDataTwo}/>
    </Container>
  );
}