import React, { useContext  } from 'react';
import Animated from 'react-native-reanimated';
import { ThemeContext } from 'styled-components';

import { Container, Button, Text } from './styles';

export default function MyTabBar({ state, descriptors, navigation, position }) {
  const themeContext = useContext(ThemeContext).colors;
  
  return (
    <Container>
      {state.routes.map((route, index) => {

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0.5)),
        });
        
        return (
          <Button
            key={route.key}
            onPress={onPress}
            style={{ backgroundColor: isFocused ? themeContext.tertiary: "transparent" }}
          >
            <Text style={{ opacity }}>
              {label}
            </Text>
          </Button>
        );
      })}
    </Container>
  );
}