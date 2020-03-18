import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Svg, {
    Path, Rect
  } from 'react-native-svg';
  

import { Avatar, Button, Circle } from './styles';

export default function StatusAvatar({ online = false, image, horizontal = false, style, ...props }) {
  return (
    <Button {...props}>
      <Avatar 
        source={{uri:image}} 
        style={[{ 
          position: horizontal ? "relative" : "absolute",
          borderColor: "#007dff"
        },
        style
      ]}
      />

      <Circle style={{ backgroundColor: online ? "#50fa7b" : "transparent" }}/>

    </Button>
  );
}