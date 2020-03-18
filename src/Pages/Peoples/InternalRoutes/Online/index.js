import React, { useState } from 'react';

import Friends from '$root/temporaryData';

import { Container, FlatList, Item } from './styles';

export default function Main({ navigation }) {
  const [ friends, setFriends ] = useState(Friends.conversations);

  return (
    <Container>

      <FlatList 
        data={friends}
        renderItem={({item}) => item.online ? (
            <Item key={item.id}
                onPress={()=> navigation.navigate('TalkPage', { userId: item.id }) }

                avatar={item.image}
                avatarSize={38}
                border={false}
                online={true}
                titleContainer={{
                    firstTitle: item.name,
                }}
            />
        ) : null}
      />

    </Container>
  );
}
