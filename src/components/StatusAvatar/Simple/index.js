import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Avatar, Button, Circle } from './styles';

export default function StatusAvatar({ 
  online = false,
  avatarSize = 54,
  image,
  icon,
  horizontal = false,
  style,
  ...props
}) {
  const themeContext = useContext(ThemeContext).colors;

  return (
    <Button {...props}
      style={{
        minWidth: avatarSize,
        minHeight: avatarSize
      }}
    >
      {image &&
        <Avatar 
          source={{uri:image}} 
          style={[{ 
            position: horizontal ? "relative" : "absolute",
            borderColor: themeContext.primary,
            minWidth: avatarSize,
            minHeight: avatarSize 
          },
          style
        ]}
        />
      }
      
      {icon}
      
      <Circle style={{ 
        backgroundColor: online ? themeContext.Green : "transparent",
        borderColor: online ? themeContext.secundary : "transparent"
      }}/>

    </Button>
  );
}