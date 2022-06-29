import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton/inde';
import { AntDesign } from '@expo/vector-icons';

import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../service/api';
import { useTheme } from 'styled-components';
import { Car } from '../../components/Car';
import { StatusBar } from 'expo-status-bar';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Appointments,
  AppointmensTitle,
  AppointmentsQuantity,
  CarFooter,
  CarWrapper,
  CarFooterPeriod,
  CarFooterTitle,
  CarFooterDate
} from './styles';
import { Load } from '../../components/Load';

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars(){
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const { goBack }: NavigationProp<ParamListBase>  = useNavigation();
  const theme = useTheme()

  function handleBack() {
    goBack();
  }

  useEffect(()=> {
    async function fetchCars(){
      try{
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally{
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

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
        <Subtitle>
          Confirto, segurança e praticidade.
        </Subtitle>
      </Header>

      {loading ? (<Load/>) :
        <Content>
          <Appointments>
            <AppointmensTitle>Agendamentos feitos</AppointmensTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList 
            data={cars}
            keyExtractor={item=>item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
      
                  <CarFooterPeriod>
                  <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name='arrowright'
                      size={20}
                      color={theme.colors.title}
                      style={{marginHorizontal: 10}}
                      />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />

        </Content>
      }
    </Container>
  );
}