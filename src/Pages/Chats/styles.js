import styled from 'styled-components/native';
import * as RNSAC from 'react-native-safe-area-context';

// export const SafeAreaView = styled(RNSAC.SafeAreaView)`
export const SafeAreaView = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: ${ props => props.theme.colors.secundary}
`;
