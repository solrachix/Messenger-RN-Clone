import React, { useContext  } from 'react';
import { ThemeContext } from 'styled-components';

import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';

import Main from './Main';
import TalkPage from './TalkPage';

const { Screen, Navigator } = createStackNavigator();

function Routes() {  
  const themeContext = useContext(ThemeContext).colors;
  return (
    <Navigator
      initialRouteName="Main"
      headerMode="screen"
      screenOptions={{
          headerStyle: {
              backgroundColor: themeContext.secundary,
              height: 60,
          },
          headerTintColor: themeContext.primary,
          gestureEnabled: true,
          cardOverlayEnabled: true,                    
          headerStyle: { backgroundColor: themeContext.secundary },
      //     ...TransitionPresets.ModalPresentationIOS,
      }}    
      // mode="modal"
    >

      <Screen name="Main" component={Main} />

      <Screen name="TalkPage" component={TalkPage} />

    </Navigator>
  );
}

export default Routes;