import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton/inde';
import { useNavigation, NavigationProp, ParamListBase} from '@react-navigation/native';

import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';

export function Scheduling(){
  const theme = useTheme();

  const { navigate }: NavigationProp<ParamListBase>  = useNavigation();

  function handleConfirmRental() {
    navigate('SchedulingDetails');
  }

  return (
    <Container>
      <Header>
        <StatusBar 
          style='light'
          translucent
          backgroundColor='transparent'
        />
        <BackButton color={theme.colors.shape}/>
        <Title>
          Escolha uma {'\n'}
          data de inicio e{'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>
              21/06/2022
            </DateValue>
          </DateInfo>

          <ArrowSvg/>

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>
              21/06/2022
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar/>
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleConfirmRental}/>
      </Footer>

    </Container>
  );
}