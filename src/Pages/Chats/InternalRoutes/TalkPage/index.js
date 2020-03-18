import React, { useState, useEffect } from 'react';

import temporaryData from '../../temporaryData';

import { Container, FlatList } from './styles';
import HeaderChat from "../../components/HeaderChat";
import Bubble from '../../components/Bubble';
import Input from '../../components/Input';

export default function TalkPage({ route, navigation }) {
  const userId = route.params.userId;
  let flatList;
  const [friends, setFriends] = useState(temporaryData.conversations);
  const [friend, setFriend] = useState({});

  useEffect(()=>{
    GetFriend();

    let parent = navigation.dangerouslyGetParent()
    parent.setOptions({
      tabBarVisible: false
    });

    navigation.setOptions({ 
      header: () => null,
    });

    return () =>
      parent.setOptions({
        tabBarVisible: true
      });

  }, []);

  function GetFriend(){
    const responce = friends.filter(({ id }) => {
      return id === userId;
    });

    setFriend(responce[0]);    
  }  

  return (
      <Container behavior="padding">
        <FlatList
          ListHeaderComponent={
            <HeaderChat
              data={friend}
              navigation={navigation}
            />
          }
          stickyHeaderIndices={[0]}
          
          data={friend.latestMessages}
          renderItem={({item}) => (
            <Bubble key={item.id} my={item.my} MessageData={item} />
          )}
          keyExtractor={(item) => item.id}

          ref={ref => flatList = ref}
          initialNumToRender={1}
          onContentSizeChange={() => flatList.scrollToEnd({animated: true})}
          onLayout={() => flatList.scrollToEnd({animated: true})}
        />
        

        <Input navigation={navigation}/>
    </Container>
  );
}

