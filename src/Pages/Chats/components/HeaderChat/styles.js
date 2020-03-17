import styled from 'styled-components/native';

export const Container = styled.View`
  /* position: absolute; */
  z-index: 9;

  width: 100%;
  height: 60px;
  padding: 0;
  padding-left: 2.5%;
  padding-right: 2.5%;
  
  top: 0;
  left: 0px;
  right: 0px;

  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  background-color: ${props => props.theme.colors.secundary};

  elevation: 40;
  shadow-offset: 5px 5px;
  shadow-color: ${props => props.theme.colors.secundary};
  shadow-opacity: 0.5;
  shadow-radius: 1px;
`;

export const Group = styled.View`
    /* width: 100%; */
    height: 100%;

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: 50px;
    height: 50px;

    margin-left: 20px;

    border-radius: 50px;
`;

export const Text = styled.Text`
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
    color: ${props => props.theme.colors.primary};
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
    /* margin-left: 20px; */
    color: ${props => props.theme.colors.text}
`;
