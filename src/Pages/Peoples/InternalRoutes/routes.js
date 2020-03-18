import React, { useContext  } from 'react';
import { ThemeContext } from 'styled-components';

import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/Feather';

import Header from "$root/components/Header";
import Stories from './Stories';
import Online from './Online';

const { Screen, Navigator } = createStackNavigator();

function Routes() {  
  const themeContext = useContext(ThemeContext).colors;
  return (
    <Navigator
      initialRouteName="Stories"
      headerMode="screen"
      screenOptions={{
          header: () => <Header title="Pessoas"
            icon={[
              <Icon name="camera" size={25} color={themeContext.primary}/>,
              <Icon name="edit" size={25} color={themeContext.primary}/>
            ]}
          />,
          headerStyle: {
              backgroundColor: themeContext.secundary,
              height: 60,
          },
          headerTintColor: themeContext.primary,
          gestureEnabled: true,
          cardOverlayEnabled: true,                    
          headerStyle: { backgroundColor: themeContext.secundary },
          ...TransitionPresets.ModalPresentationIOS,
      }}    
      // mode="modal"
    >

      <Screen name="Stories" component={Stories}/>

      <Screen name="Online" component={Online} />

    </Navigator>
  );
}

export default Routes;