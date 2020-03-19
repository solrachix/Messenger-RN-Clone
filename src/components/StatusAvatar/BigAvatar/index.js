import React from 'react';

import { Container, Image, Text } from './styles';

export default function BigAvatar({ avatar, text }) {
  console.log(avatar);
  
  return (
    <Container>
      <Image source={{ uri: avatar }} />
      <Text>{ text }</Text>
    </Container>
  );
}
