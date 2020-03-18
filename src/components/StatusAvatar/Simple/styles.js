import styled from 'styled-components/native';

export const Avatar = styled.Image`
    height: 54px;
    width: 54px;

    position: absolute;
    margin-left: 8px;

    box-shadow: 2px 2px 2px ${props => props.theme.colors.text};

    border-color: ${props => props.theme.colors.primary};
    border-width: 2px;
    border-radius: 27px;
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