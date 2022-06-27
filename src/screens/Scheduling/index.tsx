import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton/inde';
import { useNavigation, NavigationProp, ParamListBase} from '@react-navigation/native';

import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components/Button';

import { 
  Calendar, 
  DayProps, 
  generateInterval, 
  MarkedDatesProps 
} from '../../components/Calendar';

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
  const [lastSelectedDate, setLastSelectedData] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps)

  const theme = useTheme();
  const { navigate, goBack }: NavigationProp<ParamListBase>  = useNavigation();

  function handleBack() {
    goBack();
  }

  function handleChangeDate(date: DayProps){
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp){
      start = end;
      end = start;
    }

    setLastSelectedData(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);
  }

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
        <BackButton 
          onPress={handleBack}
          color={theme.colors.shape}
        />
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
        <Calendar 
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button title='Confirmar' onPress={handleConfirmRental}/>
      </Footer>

    </Container>
  );
}