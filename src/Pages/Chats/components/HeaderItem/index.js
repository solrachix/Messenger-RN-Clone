import React, { useState } from 'react';
import { View } from 'react-native';
import Search from '$root/components/Search';

// import { Container } from './styles';

export default function HeaderItem() {
  const [ search, setSearch ] = useState("");
  return (
    <View>
      <Search 
        placeholder="Search..."
        onChangeText={setSearch}
        value={search}
      />
    </View>
  );
}
