import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    margin-left: 0px;
    margin-bottom: 15px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 30px;
    margin-left: 20px;
`;

export const Input = styled.TextInput`
    height: 40px;
    width: 90%;
    border-radius: 7px;
    background-color: ${props => props.theme.colors.tertiary};
    margin-left: 0px;
    margin-top: 8px;
    padding-left: 40px;
    color: ${props => props.theme.colors.text};
`;

export const Button = styled.TouchableOpacity`
`;

