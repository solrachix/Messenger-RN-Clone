import React, { useState } from 'react';

import Search from '$root/components/Search';

import temporaryData from '../../temporaryData';

import { Container, FlatList, Simple } from './styles';

export default function HeaderItem({ navigation }) {
  const [ story, setStory ] = useState(temporaryData.story);
  const [ search, setSearch ] = useState("");
  
  return (
    <Container>
      <Search 
        placeholder="Search..."
        onChangeText={setSearch}
        value={search}
      />

      <FlatList
        horizontal
        data={story}
        renderItem={({item}) => (
            <Simple 
              horizontal
              key={item.id}
              onPress={()=> navigation.navigate('Story', { userId: item.id })}

              online={item.online}
              image={item.avatar}
            />
        )}

      />      
    </Container>
  );
}
