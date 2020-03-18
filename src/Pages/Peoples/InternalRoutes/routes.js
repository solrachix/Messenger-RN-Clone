import React, { useContext  } from 'react';
import { ThemeContext } from 'styled-components';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TabBar from '../components/TabBar';
import Stories from './Stories';
import Online from './Online';

const { Screen, Navigator } = createMaterialTopTabNavigator();

function Routes() {  
  const themeContext = useContext(ThemeContext).colors;
  return (
    <Navigator
      initialRouteName="Stories"
      tabBarPosition="top"
      keyboardDismissMode="on-drag"
      tabBarOptions={{
        showIcon: true
      }}
      tabBar={props => <TabBar {...props} />}
    >

      <Screen name="Stories" component={Stories}/>

      <Screen name="Online" component={Online} />

    </Navigator>
  );
}

export default Routes;