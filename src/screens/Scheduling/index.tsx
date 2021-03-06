import React, { useState } from 'react';
import { useNavigation, NavigationProp, ParamListBase, useRoute} from '@react-navigation/native';
import { format } from 'date-fns';

import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton/inde';

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
import { getPlataformDate } from '../../utils/getPlataformDate';
import { Alert } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

export function Scheduling(){
  const [lastSelectedDate, setLastSelectedData] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDatesProps>({} as MarkedDatesProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

  const theme = useTheme();
  const { navigate, goBack }: NavigationProp<ParamListBase>  = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

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

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlataformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlataformDate(new Date(endDate)), 'dd/MM/yyyy')
    })
  }

  function handleConfirmRental() {
    if(!rentalPeriod.startFormatted || !rentalPeriod.startFormatted){
      Alert.alert("Selecione o intervalo para alugar.")
    } else{
      navigate('SchedulingDetails', {
        car,
        dates: Object.keys(markedDates)
      });
    }

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
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg/>

          <DateInfo>
            <DateTitle>AT??</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
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