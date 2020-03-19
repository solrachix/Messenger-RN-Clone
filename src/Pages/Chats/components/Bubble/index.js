import React from 'react';
import { moderateScale } from 'react-native-size-matters';

import Icon from '@expo/vector-icons/MaterialCommunityIcons';

import moment from 'moment';

const GetHours = time => moment(time, "YYYY-MM-DD HH:mm").format("HH:mm");

import { 
    MyMessageContainer,
    OthersMessageContainer, 
    MyMessageBody, 
    OthersMessageBody, 
    MessageText
 } from './styles';

function MyMessage({ my, MessageData, ...props }) {
    globalThis.index = my;
//   <MyMessageContainer>
//   <MyMessageBody>
//       <MessageText>{ MessageData.text }</MessageText>
//       <TimeAndDisplay>                
//           <TimeText>{ GetHours(MessageData.sendDate) }</TimeText>
//           <Icon name="check" /* check-all */ size={15} color="#fff"/>
//       </TimeAndDisplay>
//   </MyMessageBody>
// </MyMessageContainer>
  return (
    <>
      <MyMessageContainer>
          <MyMessageBody {...props}>
            <MessageText>{ MessageData.text }</MessageText>
          </MyMessageBody>
      </MyMessageContainer>

    </>
  );
}

function OthersMessage({ my, MessageData, ...props }) {
    globalThis.index = my;
    return (
      <OthersMessageContainer>
          <OthersMessageBody {...props}>
            <MessageText>{ MessageData.text }</MessageText>
          </OthersMessageBody>
      </OthersMessageContainer>
    );
  }

export default function Bubble({ my, next = { my: false }, data, ...props}){
    const { my: After } = next;
    let AfterOrBefore;
    console.log("-> ", globalThis.index, After);

    if(globalThis.index == true){
      // console.log("aaaaaaaaaaaa");
    }
    else if(globalThis.index == false){
      // console.log("bbbbbbbbbbbbbbbbbb");
    }
    return (
        my == true 
        ?
          <MyMessage
            my={my}
            style={{ 
              borderTopRightRadius: globalThis.index ? 6 : 20,
              borderBottomRightRadius: globalThis.index ? After ? 6 : 20 : 6,
              marginBottom: globalThis.index ? 4 : 2.5,
              marginTop: globalThis.index ? - 10 : 0,
            }}
            {...props}
          />
        : 
          <OthersMessage
            my={my}
            style={{ 
              borderTopLeftRadius: globalThis.index ? 20 : 6,
              borderBottomLeftRadius: globalThis.index ? After ? 20 : 6 : After ? 20 : 6,
              marginBottom: globalThis.index ? 2.5 : 2.5,
              marginTop: globalThis.index ? 0 : - 8,
            }}
            {...props}
          />
    )
}