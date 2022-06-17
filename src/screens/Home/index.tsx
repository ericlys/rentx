import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars
} from './styles';

export function Home(){
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
    </Container>
  );
}