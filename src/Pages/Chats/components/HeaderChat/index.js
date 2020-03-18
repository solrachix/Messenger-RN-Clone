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
  function handleBack(){
    navigation.goBack()
  }
  return (
    <Container {...props}>
      <Button>

        <Button onPress={handleBack}>
          <IconIo name="ios-arrow-round-back" size={40} color={themeContext.primary} />
        </Button>

          <Image source={{ uri: data?.image }}/>
          <Title>{data ? data.name : "loading..."}</Title>
      </Button>

      <Group>
        <Button>
          <IconFa name="telephone" size={28} color={themeContext.primary}/>
        </Button>

        <Button onPress={handleAvatar}>
          <IconIo name="ios-videocam" size={28} color={themeContext.primary} />
        </Button>
        <Button onPress={handleAvatar}>
          <IconIo name="ios-information-circle" size={28} color={themeContext.primary} />
        </Button>
      </Group>
      
    </Container>
  );
}
