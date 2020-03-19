import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';

import StatusAvatar from '$root/components/StatusAvatar/Simple';

import { Container, Body, TitleContainer, FirstTitle, SecundTitle, Spotlight, Icon } from './styles';

export default function Item(
  { 
    border = true,
    avatar,
    avatarSize,
    icon,
    titleContainer,
    spotlight = false,
    CustomSearchlight = false,
    online = false,
    ...props
  }) {
  const themeContext = useContext(ThemeContext).colors;

  const color = {
    color: CustomSearchlight 
                ? CustomSearchlight.color == "default" 
                  ? themeContext.text 
                  : CustomSearchlight.color
                : spotlight[0] 
                    ? themeContext.primary 
                    : themeContext.text
  };
  return (
    <Container {...props}>
        <StatusAvatar image={avatar} avatarSize={avatarSize} online={online} icon={icon} />
        
        <Body style={{ borderBottomWidth: border ? 0.3 : 0 }}>
          <TitleContainer>
            <FirstTitle style={color}>{titleContainer.firstTitle}</FirstTitle>
            <SecundTitle style={color}>
              {titleContainer.secundTitle}
            </SecundTitle>
          </TitleContainer>
          {
            spotlight && 
              <TitleContainer>
                { 
                  CustomSearchlight
                    && 
                      <Icon>{CustomSearchlight.statusIcon}</Icon>
                }
                
                <TitleContainer style={{width: "92%"}}>
                  <FirstTitle numberOfLines={1}>              
                    {
                      spotlight 
                      ? spotlight[2] 
                      : CustomSearchlight 
                        ? CustomSearchlight.status
                        : null
                    }
                  </FirstTitle>
                </TitleContainer>
                { 
                  spotlight[0] 
                    && 
                      <Spotlight>{spotlight[1]}</Spotlight>
                }
              </TitleContainer>
          }
          </Body>
    </Container>
  );
}
