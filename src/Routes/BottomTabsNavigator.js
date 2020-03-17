import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
const { Screen, Navigator } = createBottomTabNavigator();

import IconNotify from '../components/IconNotify';

import Chats from '$root/Pages/Chats';
import Peoples from '$root/Pages/Peoples';


function Routes() {
  const themeContext = useContext(ThemeContext).colors;
  return (
    <Navigator 
      initialRouteName="Feed"
      navigationOptions={
          {
              gesturesEnabled:true
          }
      }
      tabBarOptions={{
        activecolor: themeContext.primary,
        inactivecolor: themeContext.tertiary,
        upperCaseLabel:false,
        indicatorStyle:{
          height:0
        },
        showIcon:true,
        showLabel:true,
        style:{
            backgroundColor: themeContext.secundary,
        },
      }}>

      <Screen name="Chats" component={Chats}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, size }) => (
            <IconNotify size={size} qtd={1} color={color} iconName="ios-chatbubbles" />
          ),
        }}
      />

      <Screen name="Peoples" component={Peoples}
        options={{
          tabBarLabel: "Peoples",
          tabBarIcon: ({ color, size }) => (
            <IconNotify size={size} qtd={1} color={color} iconName="md-people" />
          ),
        }}
      />

    </Navigator>
  );
}

export default Routes;