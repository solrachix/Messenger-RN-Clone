import React, { useContext  } from 'react';
import { ThemeContext } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';

import BottomRoutes from './Routes/BottomTabsNavigator';
import Camera from '$root/Pages/Camera';

const { Screen, Navigator } = createStackNavigator();

function Routes() {  
  const themeContext = useContext(ThemeContext).colors;
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="BottomRoutes"
        headerMode="none"
        screenOptions={{
            headerStyle: {
                backgroundColor: themeContext.secundary,
                height: 60,
            },
            headerTintColor: 'red',
            gestureEnabled: true,
            cardOverlayEnabled: true,                    
            headerStyle: { backgroundColor: themeContext.secundary },
            ...TransitionPresets.ModalPresentationIOS,
        }}    
        // mode="modal"
      >

        <Screen name="BottomRoutes" component={BottomRoutes} />

        <Screen name="Camera" component={Camera} />

      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;