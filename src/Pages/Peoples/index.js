import React, { useContext  } from 'react';
import { ThemeContext } from 'styled-components';

import Routes from './InternalRoutes/routes';

import Icon from '@expo/vector-icons/Feather';
import Header from "$root/components/Header";
import { SafeAreaView } from './styles';

export default function Peoples() {
  const themeContext = useContext(ThemeContext).colors;
  
  return (
    <SafeAreaView>
      <Header title="Pessoas"
        icon={[
          <Icon name="camera" size={25} color={themeContext.primary}/>,
          <Icon name="edit" size={25} color={themeContext.primary}/>
        ]}
      />
      <Routes />
    </SafeAreaView>
  );
}
