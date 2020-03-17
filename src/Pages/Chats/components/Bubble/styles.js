import styled from 'styled-components/native';

export const MyMessageContainer = styled.View`
    width: 100%;

    justify-content: flex-end;
    align-items: flex-end;
`;

export const OthersMessageContainer = styled.View`
    width: 100%;

    justify-content: flex-start;
    align-items: flex-start;
`;

export const MyMessageBody = styled.View`
    position: relative;

    width: 70%;
    min-height: 50px;

    margin: 10px;
    padding: 10px 18px;

    background: ${props => props.theme.colors.primary};
    box-shadow: 0 0 6px #B2B2B2;

    border-radius: 10px;

    flex-direction: row;
    justify-content: space-between;
`;

export const OthersMessageBody = styled.View`
    position: relative;

    width: 70%;
    min-height: 50px;

    margin: 10px;
    padding: 10px 1px 10px 18px;

    background: ${props => props.theme.colors.quarterly};
    box-shadow: 0 0 6px #B2B2B2;

    border-radius: 10px;

    flex-direction: row;
    justify-content: space-between;
`;

export const MessageText = styled.Text`
    width: 75%;
    color: ${props => props.theme.colors.secundary};
`;

export const TimeAndDisplay = styled.View`
    width: 30%;

    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    margin-bottom: -5px;
    margin-right: -15px;
`;

export const TimeText = styled.Text`
    width: 45%;

    color: ${props => props.theme.colors.secundary};

    font-style: italic;
    font-size: 11px;

    margin-left: 15px;
`;
