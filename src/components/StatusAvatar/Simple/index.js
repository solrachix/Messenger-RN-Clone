import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Avatar, Button, Circle } from './styles';

export default function StatusAvatar({ online = false, avatarSize, image, horizontal = false, style, ...props }) {
  const themeContext = useContext(ThemeContext).colors;

  return (
    <Button {...props}
      style={{
        minWidth: avatarSize ? avatarSize : 54,
        minHeight: avatarSize ? avatarSize : 54
      }}
    >
      <Avatar 
        source={{uri:image}} 
        style={[{ 
          position: horizontal ? "relative" : "absolute",
          borderColor: themeContext.primary,
          minWidth: avatarSize ? avatarSize : 54,
          minHeight: avatarSize ? avatarSize : 54
        },
        style
      ]}
      />

      <Circle style={{ 
        backgroundColor: online ? themeContext.Green : "transparent",
        borderColor: online ? themeContext.secundary : "transparent"
      }}/>

    </Button>
  );
}