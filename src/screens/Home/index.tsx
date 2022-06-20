import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  CardList,
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

      <CardList  
        data={[1,2,3,4,5,6,7,8]}
        keyExtractor={item => String(item)}
        renderItem={ ({item}) => <Car data={carDataOne}/>}
      />
    </Container>
  );
}