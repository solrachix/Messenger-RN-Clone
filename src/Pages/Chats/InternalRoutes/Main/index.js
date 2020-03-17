import React, { useState } from 'react';
import { FlatList } from "react-native";

import Friends from '../../temporaryData';

import Item from '$root/components/Item';
import HeaderItems from "../../components/HeaderItem";

import { Container } from './styles';

export default function Main({ navigation }) {
  const [ friends, setFriends ] = useState(Friends);

  return (
    <Container>

      <FlatList 
        data={friends}
        renderItem={({item}) => (
            <Item key={item.id}
                onPress={()=> navigation.navigate('TalkPage', { userId: item.id }) }
                avatar={item.image}
                titleContainer={{
                    firstTitle: item.name,
                    secundTitle: item.lastMessageTime
                }}
                spotlight={item.message}
            />
        )}
        ListHeaderComponent={<HeaderItems/>}
      />

    </Container>
  );
}
