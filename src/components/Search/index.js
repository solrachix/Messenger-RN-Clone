import React, { useState, useContext  } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { ThemeContext } from 'styled-components';

import Animated, { Easing } from 'react-native-reanimated';
import Icon from "@expo/vector-icons/FontAwesome";

const ContainerInputAnimated = Animated.createAnimatedComponent(View);

import { Container, Input, Button } from './styles';

export default function Search({ onPress = ()=>{} }) {
    const themeContext = useContext(ThemeContext).colors;
    const [marginHeader] = useState(new Animated.Value(0));    
    const [searchWidth] = useState(new Animated.Value(Dimensions.get("window").width));
    const searchInput = React.createRef();
    
    function animateInput(a,b,c){
        Animated.timing(searchWidth,{
            toValue:Dimensions.get("window").width*a,
            useNativeDriver:true,             
            duration: 250,  
            easing: Easing.elastic(),
        }).start();
        Animated.timing(marginHeader,{
            toValue:b,
            useNativeDriver:true,             
            duration: 250,  
            easing: Easing.elastic(),
        }).start();
    }
    return (
        <Container>
            <ContainerInputAnimated style={{marginLeft:20,width:searchWidth}}>
                <Input 
                    ref={searchInput}
                    keyboardType="default"
                    placeholder="Buscar"
                    placeholderTextColor={themeContext.placeholder}
                    onFocus={()=>animateInput(0.8,-50,false)}
                />
            </ContainerInputAnimated>
            <Button style={{justifyContent:"center"}} onPress={()=>{animateInput(1,0,true);searchInput.current.blur()}}>
                <Text style={{color:themeContext.primary,fontSize:16, marginLeft:-20}}>Cancelar</Text>
            </Button>
            <View style={{position:'absolute',marginTop:18,marginLeft:32}}>
                <Icon name="search" size={20} color={themeContext.placeholder}/> 
            </View>
        </Container>
    );
}
