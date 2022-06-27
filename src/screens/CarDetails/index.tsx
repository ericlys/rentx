import React from 'react';
import { useNavigation, NavigationProp, ParamListBase, useRoute} from '@react-navigation/native';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton/inde';
import { ImageSlider } from '../../components/ImageSlider';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

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
  About,
  Accessories,
  Footer
} from './styles';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';

interface Params {
  car: CarDTO;
}

export function CarDetails(){
  const { navigate, goBack }: NavigationProp<ParamListBase>  = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigate('Scheduling');
  }

  function handleBack() {
    goBack();
  }

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

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button title='Escolher período do aluguel' onPress={handleConfirmRental}/>
      </Footer>

    </Container>
  );
}