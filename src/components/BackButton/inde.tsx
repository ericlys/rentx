import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container
} from './styles';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

interface Props extends BorderlessButtonProps{
  color?: string;
}

export function BackButton({ color, ...res }: Props){
  const theme = useTheme();

  return (
    <Container {...res}>
      <MaterialIcons
        name='chevron-left'
        size={24}
        color={ color ? color : theme.colors.text }
      />
    </Container>
  );
}