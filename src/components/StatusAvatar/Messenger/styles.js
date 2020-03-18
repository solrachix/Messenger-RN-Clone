import styled from 'styled-components/native';


export const LastStory = styled.Image`
    height: 54px;
    width: 54px;

    position: absolute;
    margin-left: 8px;
    margin-bottom: 8px;

    box-shadow: 2px 2px 2px ${props => props.theme.colors.text};

    /* border-color: ${props => props.theme.colors.primary};
    border-width: 2px; */
    border-radius: 12px;
`;

export const Avatar = styled.Image`
    height: 50px;
    width: 50px;

    position: absolute;
    left: 14%;
    top: 8%;

    border-color: ${props => props.theme.colors.primary};
    border-width: 2px;
    border-radius: 50px;
`;

export const Button = styled.TouchableOpacity`

`;

export const Circle = styled.View`
    position: absolute;
    left: 70%;
    top: 65%;

    height: 12px;
    width: 12px;

    background: ${ props => props.theme.colors.Green };

    border-radius: 50px;
`;