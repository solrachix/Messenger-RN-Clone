import React, { useState, useContext  } from 'react';

import { ThemeContext } from 'styled-components';

import { Container, Input, Button, Icon } from './styles';

export default function InputElements({ navigation, onPress = ()=>{} }) {
    const themeContext = useContext(ThemeContext).colors;
    const searchInput = React.createRef();

    return (
        <Container>
            <Button 
                style={{ marginLeft: 10, marginRight: 10}}
                onPress={()=>{}}>
                <Icon name="plus" size={26} /> 
            </Button>
                
            <Input 
                ref={searchInput}
                placeholder="Buscar"
                placeholderTextColor={themeContext.placeholder}

                underlineColorAndroid='transparent'                
                autoCorrets={true}
                keyboardAppearance="dark"
                keyboardType="default"
            />

            <Button
                style={{  marginLeft: 10, marginRight: 10}}
                onPress={()=>{searchInput.current.blur()}}>
                <Icon name="microphone" size={26} /> 
            </Button>
        </Container>
    );
}