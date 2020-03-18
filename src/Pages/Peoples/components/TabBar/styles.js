import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled.View`
  margin-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 48%;
  height: 30px;

  justify-content: center;
  align-items: center;

  border-radius: 20px;

  background-color: ${ props => props.theme.colors.tertiary};
`;

export const Text = styled(Animated.Text)`
  color: ${ props => props.theme.colors.text};
`;