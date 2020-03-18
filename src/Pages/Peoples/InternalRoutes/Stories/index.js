import React, { useState } from 'react';
import { Dimensions } from 'react-native';

import temporaryData from '$root/temporaryData';

import { Container, FlatList, Messenger } from './styles';

export default function Stories({ navigation }) {
  const [ story, setStory ] = useState(temporaryData.story);
  const { width } = Dimensions.get("window");
  const numberGrid = 2;
  const itemWidth = width / numberGrid;

  return (
    <Container>
       <FlatList
        numColumns={numberGrid}
        // keyExtractor={(_, index) => index} 

        data={story}
        renderItem={({item}) => (
            <Messenger 
              style={{ width: itemWidth / 1.2 , height: itemWidth }}              

              horizontal              
              key={item.id}
              onPress={()=> navigation.navigate('Story', { userId: item.id })}

              online={item.online}

              avatar={item.avatar}
              image={item.stories.slice(-1)[0].image}
            />
        )}

      />
    </Container>
  );
}
