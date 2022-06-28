import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, NavigationProp, ParamListBase, useRoute} from '@react-navigation/native';
import { format } from 'date-fns';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton/inde';
import { ImageSlider } from '../../components/ImageSlider';

import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlataformDate } from '../../utils/getPlataformDate';
import { api } from '../../service/api';

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
  Accessories,
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
import { Alert } from 'react-native';

interface RentalPeriod {
  start: string;
  end: string;
}

interface Params {
  car: CarDTO;
  dates: string[];
}


export function SchedulingDetails(){
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
  const theme = useTheme();
  const route = useRoute();
  const { car, dates } = route.params as Params;

  const rentTotal = Number(dates.length * car.rent.price);

  const { navigate, goBack }: NavigationProp<ParamListBase>  = useNavigation();

  async function handleConfirmRental() {
    const scheduleByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = {
    ...scheduleByCar.data.unavailable_dates,
    ...dates,
    }

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
    .then(() => navigate('SchedulingComplete'))
    .catch(()=> Alert.alert('Não foi possivel confirmar o agendamento.'))
  }

  function handleBack() {
    goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlataformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlataformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    })
  }, [])

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack}/>
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={car.photos} 
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rend>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rend>
        </Details>

        <Accessories>
          { 
            car.accessories.map(accessory => (
              <Accessory 
                key={accessory.type} 
                name={accessory.name} 
                icon={getAccessoryIcon(accessory.type)}
              />
            ))
          }
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather 
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}/>
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>
          <Feather 
              name='chevron-right'
              size={RFValue(10)}
              color={theme.colors.text}/>
          <DateInfo>
          <DateTitle>ATÉ</DateTitle>
          <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button 
          title='Alugar agora' 
          color={theme.colors.success} 
          onPress={handleConfirmRental}
        />
      </Footer>

    </Container>
  );
}