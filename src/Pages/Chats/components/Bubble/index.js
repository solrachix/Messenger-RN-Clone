import React from 'react';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import moment from 'moment';

const GetHours = time => moment(time, "YYYY-MM-DD HH:mm").format("HH:mm");

import { 
    MyMessageContainer,
    OthersMessageContainer, 
    MyMessageBody, 
    OthersMessageBody, 
    MessageText,
    TimeAndDisplay,
    TimeText
 } from './styles';

function MyMessage({ MessageData }) {
  return (
    <MyMessageContainer>
        <MyMessageBody>
            <MessageText>{ MessageData.text }</MessageText>
            <TimeAndDisplay>                
                <TimeText>{ GetHours(MessageData.sendDate) }</TimeText>
                <Icon name="check" /* check-all */ size={15} color="#fff"/>
            </TimeAndDisplay>
        </MyMessageBody>
    </MyMessageContainer>
  );
}

function OthersMessage({ MessageData }) {
    return (
      <OthersMessageContainer>
          <OthersMessageBody>
            <MessageText>{ MessageData.text }</MessageText>
            <TimeAndDisplay>                
                <TimeText>{ GetHours(MessageData.sendDate) }</TimeText>
            </TimeAndDisplay>
          </OthersMessageBody>
      </OthersMessageContainer>
    );
  }

export default function Bubble({ my, ...props}){
    // console.log(props);
    
    return (
        my == true ? <MyMessage {...props} /> : <OthersMessage {...props} />
    )
}