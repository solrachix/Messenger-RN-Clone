import styled from 'styled-components/native';
import * as React from 'react-native';
import S from '$root/components/StatusAvatar/Simple';

export const Container = styled.View`
  
`;

export const FlatList = styled(React.FlatList)`
  min-width: 100%;
  height: 70px;

  padding: 10px;
  padding-bottom: 0px;
  margin-bottom: 10px;
  /* justify-content: center; */

  /* background-color: #f00; */
`;

export const Simple = styled(S)`
  margin-left: 10px;
  margin-right: 10px;
`;