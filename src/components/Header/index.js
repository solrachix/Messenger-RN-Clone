import React, { useContext } from 'react';
import { ThemeContext } from "styled-components";

import { Container, Group, Title, Button, StatusAvatar } from './styles';

export default function Header({ title, icon, onPress, ...props }) {
  const themeContext = useContext(ThemeContext).colors;

  return (
    <Container {...props}>

      <Button onPress={onPress}>
        <StatusAvatar array={[[0,1]]} image='https://avatars1.githubusercontent.com/u/57706806?s=60&v=4'/>
      </Button>

      <Title>{ title }</Title>

      <Group>
        {
          Array.isArray(icon) 
            ?
              icon.map((item, index) => (
                <Button 
                  key={index}
                  style={{
                    padding: 8,
                    borderRadius: 50,
                    backgroundColor: themeContext.tertiary,
                  }}
                >
                  {item}
                </Button>
              ))
            :
              {icon}
        }
      </Group>

    </Container>
  );
}
