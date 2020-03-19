import React, { useContext  } from 'react';
import { ThemeContext } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';

import BottomRoutes from './Routes/BottomTabsNavigator';
import Camera from '$root/Pages/Camera';
import Story from '$root/Pages/Story';
import Settings from '$root/Pages/Settings';

const { Screen, Navigator } = createStackNavigator();

function Routes() {  
  const themeContext = useContext(ThemeContext).colors;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator
          initialRouteName="BottomRoutes"
          headerMode="none"
          screenOptions={{
              headerStyle: {
                  backgroundColor: themeContext.secundary,
                  height: 60,
              },
              gestureEnabled: true,
              cardOverlayEnabled: true,                    
              headerStyle: { backgroundColor: themeContext.secundary },
              ...TransitionPresets.ModalPresentationIOS,
          }}    
          mode="modal"
        >

          <Screen name="BottomRoutes" component={BottomRoutes} />

          <Screen name="Camera" component={Camera} />

          <Screen name="Story" component={Story} />

          <Screen name="Settings" component={Settings} />

        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Routes;