import React from 'react';

import { LastStory, Avatar, Button, Circle } from './styles';

export default function StatusAvatar({ online = false, image, avatar, horizontal = false, style, ...props }) {

  return (
    <Button {...props}>
      <LastStory 
        source={{uri:image}} 
        style={[{ 
          position: horizontal ? "relative" : "absolute",
        },
        style
      ]}
      />

      <Avatar
        source={{uri:avatar}} 
      />
      {/* <Circle style={{ backgroundColor: online ? "#50fa7b" : "transparent" }}/> */}

    </Button>
  );
}