import React, { useContext  } from 'react';
import { ThemeContext } from 'styled-components';
import Icon from '@expo/vector-icons/Feather';

import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';

import Header from "$root/components/Header";

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

      <Screen name="Main" component={Main} options={{
        header: ({ navigation }) => 
          <Header title="Bate-papos"
            onPress={() => navigation.navigate('Settings')}
            icon={[
              <Icon name="camera" size={25} color={themeContext.primary}/>,
              <Icon name="edit" size={25} color={themeContext.primary}/>
            ]}
          />,
        }}
      />

      <Screen name="TalkPage" component={TalkPage} />

    </Navigator>
  );
}

export default Routes;