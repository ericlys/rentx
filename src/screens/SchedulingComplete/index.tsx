import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useNavigation, NavigationProp, ParamListBase} from '@react-navigation/native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  Title,
  Mensage,
  Footer
} from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';
import { StatusBar } from 'expo-status-bar';

export function SchedulingComplete(){
  const { width } = useWindowDimensions();

  const { navigate }: NavigationProp<ParamListBase>  = useNavigation();

  function handleConfirm() {
    navigate('Home');

  }
  return (
    <Container>
       <StatusBar 
          style='light'
          translucent
          backgroundColor='transparent'
        />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80}/>
        <Title>Carro alugado!</Title>
        <Mensage>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel
        </Mensage>
      </Content>

      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirm}/>
      </Footer>
    </Container>
  );
}