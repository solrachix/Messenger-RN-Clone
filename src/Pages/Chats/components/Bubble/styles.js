import styled from 'styled-components/native';
import { moderateScale } from 'react-native-size-matters';

export const MyMessageContainer = styled.View`
    margin-top: ${moderateScale(7, 2)}px;
    /* margin-bottom: 10px; */
    margin-right: 20px;
    flex-direction: row;

    align-self: flex-end;
`;

export const OthersMessageContainer = styled.View`
    margin-top: ${moderateScale(7, 2)}px;
    margin-left: 20px;

    flex-direction: row;
`;

export const MyMessageBody = styled.View`
    position: relative;

    max-width: ${moderateScale(250, 2)}px;
    /* width: 70%; */
    /* min-height: 50px; */

    margin: 2.5px;

    padding: 10px 18px;
    padding-left: ${moderateScale(10, 2)}px;
    padding-top: ${moderateScale(5, 2)}px;
    padding-bottom: ${moderateScale(7, 2)}px;

    background: ${props => props.theme.colors.primary};
    box-shadow: 0 0 6px #B2B2B2;

    border-radius: 20px;

    flex-direction: row;
    justify-content: space-between;
`;

export const OthersMessageBody = styled.View`
    position: relative;

    max-width: ${moderateScale(250, 2)}px;
    /* width: 70%; */
    /* min-height: 50px; */

    margin: 2.5px;

    padding: 10px 18px;
    padding-left: ${moderateScale(10, 2)}px;
    padding-top: ${moderateScale(5, 2)}px;
    padding-bottom: ${moderateScale(7, 2)}px;

    background: ${props => props.theme.colors.quarterly};
    box-shadow: 0 0 6px #B2B2B2;

    border-radius: 20px;

    flex-direction: row;
    justify-content: space-between;
`;

export const MessageText = styled.Text`
    padding-top: 5px;
    /* width: 100%; */
    color: ${props => props.theme.colors.secundary};
`;







// export const TimeAndDisplay = styled.View`
//     width: 30%;

//     flex-direction: row;
//     justify-content: space-between;
//     align-items: flex-end;

//     margin-bottom: -5px;
//     margin-right: -15px;
// `;

// export const TimeText = styled.Text`
//     width: 45%;

//     color: ${props => props.theme.colors.secundary};

//     font-style: italic;
//     font-size: 11px;

//     margin-left: 15px;
// `;
