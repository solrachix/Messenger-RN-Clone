import React, { useContext } from 'react';
import { ThemeContext } from "styled-components";

import IconIo from "@expo/vector-icons/Ionicons";
import IconFa from "@expo/vector-icons/Foundation";

import { Container, Group, Button, Image, Text, Title } from './styles';

export default function HeaderChat({ navigation, data,...props }) {
  const themeContext = useContext(ThemeContext).colors;
  
  function handleAvatar(){
      // console.log(data);
      navigation.navigate('Chats', { screen: 'Profile' });
  }
  return (
    <Container {...props}>
      <Button>
          <IconIo name="ios-arrow-back" size={20} color={themeContext.primary} />
          <Text>Voltar</Text>
      </Button>

      <Title>{data ? data.name : "loading..."}</Title>

      <Group>
        <Button>
          <IconFa name="telephone" size={30} color={themeContext.primary}/>
        </Button>

        <Button onPress={handleAvatar}>
            <Image source={{ uri: data?.image }}/>
        </Button> 
      </Group>
      
    </Container>
  );
}
