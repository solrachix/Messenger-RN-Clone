import styled from 'styled-components/native';
import * as React from 'react-native';
import I from '$root/components/Item';

export const Container = styled.View`
  flex: 1;
  
  background-color: ${ props => props.theme.colors.secundary };
`;

export const FlatList = styled(React.FlatList)`
  min-width: 100%;
  height: 70px;

  padding: 10px;
  padding-left: 0px;
  padding-bottom: 0px;
  margin-bottom: 10px;
  /* justify-content: center; */

  /* background-color: #f00; */
`;

export const Item = styled(I)`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
`;