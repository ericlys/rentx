import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import { api } from '../../service/api';

import {
  CardList,
  Container,
  Header,
  HeaderContent,
  TotalCars
} from './styles';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';

export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const { navigate }: NavigationProp<ParamListBase>  = useNavigation();

  function handleCarDetails() {
    navigate('CarDetails');
  }
  useEffect(()=> {
    async function fetchCars() {
      try {
        console.log(api.getUri())
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

    }

    fetchCars();
  },[])
  useEffect(()=> {
    async function fetchCars() {
      try {
        console.log(api.getUri())
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

    }

    fetchCars();
  },[])

  return (
    <Container>
      <StatusBar
        style='light'
        translucent={true}
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
      { loading ? <Load/> : 
        <CardList  
        data={cars}
        keyExtractor={item => item.id}
        renderItem={ ({item}) => 
        <Car data={item} onPress={handleCarDetails}/>}
      />
      }
      
    </Container>
  );
}