import styled from 'styled-components/native';
import SA from '$root/components/StatusAvatar';
import Feather from '@expo/vector-icons/Feather';

export const Container = styled.View`
  /* position: absolute; */
  z-index: 9;

  width: 100%;
  height: 60px;
  padding: 0;
  padding-left: -0.5%;
  padding-right: -0.5%;
  
  top: 0;
  left: 0px;
  right: 0px;

  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  
  background-color: ${props => props.theme.colors.secundary};
`;

export const Group = styled.View`
    /* width: 100%; */
    height: 100%;

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 25px;
    margin-left: 10px;
    color: ${props => props.theme.colors.text};
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-right: 20px;
`;

export const StatusAvatar = styled(SA)`
  position: relative;
  width: 45px;
  height: 45px;

  margin-left: 20px;
`;